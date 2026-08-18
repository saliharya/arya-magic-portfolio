"use client";

import React, { useState } from "react";
import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";

interface TestimonialItem {
  quote: React.ReactNode;
  name: string;
  role: string;
  linkedIn?: string;
}

interface TestimonialsProps {
  title: string;
  items: TestimonialItem[];
  defaultVisible?: number;
}

export default function Testimonials({ title, items, defaultVisible = 2 }: TestimonialsProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleCount = expanded ? items.length : Math.min(defaultVisible, items.length);
  const visible = items.slice(0, visibleCount);
  const hiddenCount = items.length - defaultVisible;

  return (
    <>
      <Heading as="h2" id={title} variant="display-strong-s" marginBottom="40">
        {title}
      </Heading>
      <Column fillWidth gap="m" marginBottom={hiddenCount > 0 ? "16" : "40"}>
        {visible.map((testimonial, index) => (
          <Column
            key={`${testimonial.name}-${index}`}
            fillWidth
            gap="16"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
          >
            <Text
              id={testimonial.name}
              variant="body-default-m"
              onBackground="neutral-strong"
              style={{ fontStyle: "italic" }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </Text>
            <Column gap="2">
              <Text variant="heading-strong-s">
                {testimonial.linkedIn ? (
                  <a
                    className="link-inherit"
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {testimonial.name}
                  </a>
                ) : (
                  testimonial.name
                )}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {testimonial.role}
              </Text>
            </Column>
          </Column>
        ))}
      </Column>
      {hiddenCount > 0 && (
        <Row marginBottom="40">
          <Button
            variant="secondary"
            size="s"
            onClick={() => setExpanded((v) => !v)}
            suffixIcon={expanded ? "chevronUp" : "chevronDown"}
          >
            {expanded ? "Show less" : `View ${hiddenCount} more recommendation${hiddenCount > 1 ? "s" : ""}`}
          </Button>
        </Row>
      )}
    </>
  );
}
