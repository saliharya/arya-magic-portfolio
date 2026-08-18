import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard, CollapsibleList } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** When true, projects not relevant to Android/Kotlin collapse behind a "more" toggle. */
  collapsible?: boolean;
}

export function Projects({ range, exclude, collapsible }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const priorityDiff = (b.metadata.priority ?? 0) - (a.metadata.priority ?? 0);
    if (priorityDiff !== 0) return priorityDiff;
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const cards = displayedProjects.map((post, index) => (
    <ProjectCard
      priority={index < 2}
      key={post.slug}
      href={`/work/${post.slug}`}
      images={post.metadata.images}
      title={post.metadata.title}
      description={post.metadata.summary}
      content={post.content}
      avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
      link={post.metadata.link || ""}
    />
  ));

  if (collapsible) {
    // Relevant projects are already ranked first via priority; collapse the rest.
    const visibleCount = displayedProjects.filter((p) => p.metadata.androidRelevant !== false).length;
    return (
      <CollapsibleList
        gap="xl"
        marginBottom="40"
        paddingX="l"
        visibleCount={visibleCount}
        moreLabel="Show more projects"
      >
        {cards}
      </CollapsibleList>
    );
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {cards}
    </Column>
  );
}
