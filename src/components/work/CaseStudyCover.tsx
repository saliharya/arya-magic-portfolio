import { Column, Grid, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export interface CaseStudyCoverProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  metrics?: CaseStudyMetric[];
  stack?: string[];
}

/**
 * Theme-aware hero cover for project / case-study pages.
 * Replaces static SVG covers so the visual scales crisply, follows the
 * active design tokens (brand, neutral, surface), and stays responsive.
 */
export function CaseStudyCover({
  eyebrow,
  title,
  subtitle,
  metrics = [],
  stack = [],
}: CaseStudyCoverProps) {
  return (
    <Column
      fillWidth
      background="surface"
      border="neutral-alpha-medium"
      radius="l"
      padding="xl"
      s={{ padding: "l" }}
      gap="l"
    >
      <Column gap="16">
        {eyebrow && (
          <Text
            variant="label-strong-s"
            onBackground="brand-medium"
            style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
          >
            {eyebrow}
          </Text>
        )}
        <Heading variant="display-strong-l" wrap="balance">
          {title}
        </Heading>
        {subtitle && (
          <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
            {subtitle}
          </Text>
        )}
      </Column>

      {metrics.length > 0 && (
        <>
          <Line background="neutral-alpha-weak" />
          <Grid columns="4" m={{ columns: "2" }} s={{ columns: "2" }} gap="12" fillWidth>
            {metrics.map((metric) => (
              <Column
                key={`${metric.value}-${metric.label}`}
                fillWidth
                background="brand-alpha-weak"
                border="brand-alpha-weak"
                radius="m"
                padding="m"
                gap="4"
              >
                <Heading variant="heading-strong-l" onBackground="brand-strong" wrap="balance">
                  {metric.value}
                </Heading>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {metric.label}
                </Text>
              </Column>
            ))}
          </Grid>
        </>
      )}

      {stack.length > 0 && (
        <Row gap="8" wrap>
          {stack.map((item) => (
            <Tag key={item} size="m">
              {item}
            </Tag>
          ))}
        </Row>
      )}
    </Column>
  );
}
