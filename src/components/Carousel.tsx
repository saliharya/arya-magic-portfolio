"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Flex, IconButton, Media } from "@once-ui-system/core";

interface CarouselItem {
  slide: string | React.ReactNode;
  alt?: string;
}

interface CarouselProps extends React.ComponentProps<typeof Flex> {
  items: CarouselItem[];
  controls?: boolean;
  priority?: boolean;
  fill?: boolean;
  indicator?: "line" | "thumbnail" | false;
  aspectRatio?: string;
  sizes?: string;
  revealedByDefault?: boolean;
}

const DURATION = 480;

const CSS = `
@keyframes _pageInRight {
  from { transform: translateX(100%); box-shadow: -6px 0 24px rgba(0,0,0,0.18); }
  to   { transform: translateX(0);    box-shadow:  0px 0 0px rgba(0,0,0,0); }
}
@keyframes _pageInLeft {
  from { transform: translateX(-100%); box-shadow: 6px 0 24px rgba(0,0,0,0.18); }
  to   { transform: translateX(0);     box-shadow: 0px 0 0px rgba(0,0,0,0); }
}
@keyframes _pageOutLeft {
  from { transform: translateX(0);    opacity: 1; }
  to   { transform: translateX(-8%);  opacity: 0; }
}
@keyframes _pageOutRight {
  from { transform: translateX(0);   opacity: 1; }
  to   { transform: translateX(8%);  opacity: 0; }
}

._carouselControls ._arrowBtn {
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
._carouselControls:hover ._arrowBtn,
._carouselControls:focus-within ._arrowBtn {
  opacity: 1;
  transform: translateX(0) !important;
}
._arrowBtnLeft  { transform: translateX(-1rem); }
._arrowBtnRight { transform: translateX(1rem);  }
`;

function SlideWrapper({
  src,
  onError,
  children,
}: {
  src?: string;
  onError: (src: string) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cbRef = useRef(onError);
  cbRef.current = onError;

  useEffect(() => {
    if (!src || !ref.current) return;
    const img = ref.current.querySelector("img");
    if (!img) return;
    const handle = () => cbRef.current(src);
    img.addEventListener("error", handle);
    if (img.complete && img.naturalWidth === 0) handle();
    return () => img.removeEventListener("error", handle);
  }, [src]);

  return (
    <div ref={ref} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

type Tx = { from: number; to: number; dir: "next" | "prev" } | null;

export const Carousel: React.FC<CarouselProps> = ({
  items = [],
  fill = false,
  controls = true,
  priority = false,
  indicator = "line",
  aspectRatio = "original",
  sizes,
  revealedByDefault = false,
  ...rest
}) => {
  const [displayed, setDisplayed] = useState(0);
  const [tx, setTx] = useState<Tx>(null);
  const [erroredSrcs, setErroredSrcs] = useState<Set<string>>(new Set());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const onImageError = useCallback((src: string) => {
    setErroredSrcs((prev) => (prev.has(src) ? prev : new Set([...prev, src])));
  }, []);

  const validItems = items.filter(
    (it) => typeof it.slide !== "string" || !erroredSrcs.has(it.slide),
  );

  useEffect(() => {
    if (validItems.length > 0 && displayed >= validItems.length) {
      setDisplayed(validItems.length - 1);
      setTx(null);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [validItems.length, displayed]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const indicatorActive = tx?.to ?? displayed;
  const isAnimating = tx !== null;

  const goTo = useCallback(
    (target: number, dir?: "next" | "prev") => {
      if (target === displayed || isAnimating) return;
      const direction = dir ?? (target > displayed ? "next" : "prev");
      if (timerRef.current) clearTimeout(timerRef.current);

      setTx({ from: displayed, to: target, dir: direction });
      timerRef.current = setTimeout(() => {
        setDisplayed(target);
        setTx(null);
      }, DURATION);
    },
    [displayed, isAnimating],
  );

  if (validItems.length === 0 && items.length === 0) return null;

  const handlePrev = () => displayed > 0 && goTo(displayed - 1, "prev");
  const handleNext = () =>
    goTo(displayed < validItems.length - 1 ? displayed + 1 : 0, "next");

  const computedAR =
    aspectRatio === "original" || aspectRatio === "auto" ? undefined : aspectRatio;
  const radiusVal = rest.radius ?? "l";

  const renderSlide = (idx: number) => {
    const item = validItems[idx];
    if (!item) return null;
    const content = item.slide;
    const inner =
      typeof content === "string" ? (
        <Media
          fill={fill}
          sizes={sizes}
          priority={priority && idx === 0}
          radius={radiusVal}
          overflow="hidden"
          aspectRatio={fill ? undefined : computedAR}
          src={content}
          alt={item.alt ?? ""}
        />
      ) : (
        <Flex fill overflow="hidden">
          {content}
        </Flex>
      );
    return (
      <SlideWrapper
        key={typeof content === "string" ? content : idx}
        src={typeof content === "string" ? content : undefined}
        onError={onImageError}
      >
        {inner}
      </SlideWrapper>
    );
  };

  const easing = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  const baseAnim =
    tx
      ? `${tx.dir === "next" ? "_pageOutLeft" : "_pageOutRight"} ${DURATION}ms ${easing} both`
      : undefined;
  const overlayAnim =
    tx
      ? `${tx.dir === "next" ? "_pageInRight" : "_pageInLeft"} ${DURATION}ms ${easing} both`
      : undefined;

  const showPrev = validItems.length > 1 && controls && displayed > 0;
  const showNext = validItems.length > 1 && controls && displayed < validItems.length - 1;

  return (
    <Flex
      fillWidth
      fillHeight={fill}
      direction="column"
      gap="12"
      {...rest}
      aspectRatio={undefined}
      radius={undefined}
      border={undefined}
      overflow={undefined}
      style={{ isolation: "isolate", ...(rest.style as React.CSSProperties) }}
    >
      <style>{CSS}</style>

      <div
        className="_carouselControls"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: computedAR,
          flexGrow: fill ? 1 : undefined,
          borderRadius: "var(--radius-l)",
          border: "1px solid var(--neutral-alpha-weak)",
          overflow: "hidden",
          minHeight: validItems.length === 0 ? "200px" : undefined,
        }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
          touchStartX.current = null;
        }}
      >
        <div style={{ animation: baseAnim }}>
          {renderSlide(tx ? tx.from : displayed)}
        </div>

        {tx && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              animation: overlayAnim,
            }}
          >
            {renderSlide(tx.to)}
          </div>
        )}

        {showPrev && (
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="_arrowBtn _arrowBtnLeft"
            style={{
              position: "absolute",
              left: 0, top: 0,
              height: "100%", width: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "12px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <Flex radius="l" overflow="hidden" background="surface">
              <IconButton tabIndex={-1} variant="secondary" icon="chevronLeft" />
            </Flex>
          </button>
        )}

        {showNext && (
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="_arrowBtn _arrowBtnRight"
            style={{
              position: "absolute",
              right: 0, top: 0,
              height: "100%", width: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "12px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <Flex radius="l" overflow="hidden" background="surface">
              <IconButton tabIndex={-1} variant="secondary" icon="chevronRight" />
            </Flex>
          </button>
        )}
      </div>

      {validItems.length > 1 && indicator === "line" && (
        <div
          style={{
            display: "flex",
            gap: "4px",
            width: "100%",
            padding: "0 var(--static-space-s, 8px)",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          {validItems.map((_, i) => (
            <div
              key={i}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                flex: 1,
                height: "2px",
                borderRadius: "999px",
                cursor: "pointer",
                background:
                  indicatorActive === i
                    ? "var(--neutral-on-background-strong)"
                    : "var(--neutral-alpha-medium)",
                transition: "background 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </Flex>
  );
};
