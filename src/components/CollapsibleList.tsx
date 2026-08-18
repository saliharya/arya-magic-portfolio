"use client";

import React, { useState } from "react";
import { Button, Column, Row } from "@once-ui-system/core";

interface CollapsibleListProps {
  /** The items to render; the first `visibleCount` show by default, the rest collapse. */
  children: React.ReactNode;
  /** How many children to show before the "more" toggle. */
  visibleCount: number;
  /** Label prefix for the expand button (a "(n)" count is appended). */
  moreLabel?: string;
  /** Label for the collapse button. */
  lessLabel?: string;
  /** Vertical gap between items (once-ui spacing token). */
  gap?: string;
  /** Bottom margin for the whole block (once-ui spacing token). */
  marginBottom?: string;
  /** Horizontal padding for the whole block (once-ui spacing token). */
  paddingX?: string;
}

/**
 * Renders a list where items beyond `visibleCount` are hidden behind a
 * "View more" toggle — same interaction as the Recommendations section.
 * Order the children so the ones you want visible come first.
 */
export function CollapsibleList({
  children,
  visibleCount,
  moreLabel = "View more",
  lessLabel = "Show less",
  gap = "l",
  marginBottom,
  paddingX,
}: CollapsibleListProps) {
  const [expanded, setExpanded] = useState(false);

  const items = React.Children.toArray(children);
  const safeCount = Math.max(0, Math.min(visibleCount, items.length));
  const hiddenCount = items.length - safeCount;
  const visible = expanded ? items : items.slice(0, safeCount);

  return (
    <Column
      fillWidth
      gap={gap as never}
      marginBottom={marginBottom as never}
      paddingX={paddingX as never}
    >
      {visible}
      {hiddenCount > 0 && (
        <Row paddingTop="8">
          <Button
            variant="secondary"
            size="s"
            onClick={() => setExpanded((v) => !v)}
            suffixIcon={expanded ? "chevronUp" : "chevronDown"}
          >
            {expanded ? lessLabel : `${moreLabel} (${hiddenCount})`}
          </Button>
        </Row>
      )}
    </Column>
  );
}
