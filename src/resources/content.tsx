import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Salih Arya",
  lastName: "Gumilang",
  name: `Salih Arya Gumilang`,
  role: "Android Developer · Jetpack Compose · IoT & Real-time Systems",
  avatar: "/images/avatar.jpg",
  email: "saliharya@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about software engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saliharya",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aryagumilang/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/saliharya",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my Android development work`,
  headline:
    <>I'm Salih Arya Gumilang, <br />
      an Android Developer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Feggyfy</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/feggyfy-ai-crop-disease-detection",
  },
  subline: (
    <>
      I build Android systems that can't afford to fail — <br />
      specializing in Jetpack Compose, IoT &amp; BLE integration, and
      real-time WebSocket architectures for production.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Salih Arya Gumilang is an{" "}
        <strong>Android Developer</strong> specializing in{" "}
        <strong>Kotlin, Jetpack Compose, and real-time IoT systems</strong>. He builds
        production-grade Android apps for high-stakes environments — from BLE device
        integration to zero-downtime WebSocket architectures serving 500+ daily users.
        A <strong>Bangkit Academy Distinction Graduate</strong> (led by Google,
        Tokopedia, Gojek, and Traveloka), Arya pairs clean architecture (MVVM, Clean
        Architecture) with measurable impact, and explores Compose Multiplatform to
        share logic without leaving the native ecosystem.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "getgoing.co.id",
        timeframe: "Sep 2024 – May 2025",
        role: "React Native & React Developer",
        achievements: [
          <>
            Enhanced app stability by resolving bugs, ensuring seamless performance for end-users.
          </>,
          <>
            Translated Figma designs into responsive, reusable React UI components.
          </>,
          <>
            Refactored code to follow modern best practices, significantly improving readability and scalability.
          </>,
          <>
            Designed and deployed backend features using Cloud Functions integrated with Firestore.
          </>,
        ],
        images: [],
      },
      {
        company: "Telehealth Indonesia (Freelance)",
        timeframe: "Mar 2024 – May 2024",
        role: "Android Developer (Kotlin)",
        achievements: [
          <>
            Integrated medical test data (ketone, spirometer, hematocrit) via API into the ATM Sehat App,
            enhancing diagnostic capabilities for remote users.
          </>,
          <>
            Built <strong>Tea App</strong> to synchronize data and visualize health metrics with charts and
            history logs, improving patient dashboards for doctors and users.
          </>,
          <>
            Collaborated with technical and medical teams to refine integration and data visualization.
          </>,
        ],
        images: [],
      },
      {
        company: "SplitOff (Freelance)",
        timeframe: "Jan 2024 – Mar 2024",
        role: "Flutter Developer",
        achievements: [
          <>
            Translated Figma designs into responsive, reusable Flutter UI components with cross-platform
            support for Android & iOS.
          </>,
          <>
            Implemented state management using Bloc (Cubit) and optimized real-time data rendering.
          </>,
          <>
            Integrated RESTful APIs and developed a voucher feature with dynamic promo logic.
          </>,
        ],
        images: [],
      },
      {
        company: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
        timeframe: "Aug 2023 – Jan 2024",
        role: "Android Developer Cohort",
        achievements: [
          <>
            Built <strong>CafeAlyzer</strong>, an AI-powered app for competitor analysis and sentiment
            recommendations for small cafes.
          </>,
          <>
            Developed search, competitor comparison, and ML-based sentiment analysis features.
          </>,
          <>
            Collaborated with Backend and ML teams to ensure smooth integration and on-time delivery.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ahmad Dahlan University",
        description: <>Bachelor’s Degree in Informatics Engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Mobile Development",
        description: (
          <>
            Experienced in building scalable mobile apps using{" "}
            <strong>Flutter, React Native, and Kotlin</strong>. Skilled in
            implementing state management (Bloc, MVVM), navigation, and ensuring
            cross-platform compatibility.
          </>
        ),
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "React Native", icon: "react" },
          { name: "Kotlin", icon: "kotlin" },
          { name: "Android Studio", icon: "android" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in building responsive, reusable UI with{" "}
            <strong>React and modern web technologies</strong>. Experienced in
            translating Figma designs, optimizing performance, and integrating
            RESTful APIs.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "HTML/CSS", icon: "html" },
        ],
        images: [],
      },
      {
        title: "Android Development",
        description: (
          <>
            Skilled in{" "}
            <strong>Jetpack Compose, Clean Architecture, MVVM, and Android SDK</strong>.
            Experienced with libraries and tools like Retrofit, Room, Koin, and
            Kotlin Flow to build production-ready apps.
          </>
        ),
        tags: [
          { name: "Jetpack Compose", icon: "android" },
          { name: "MVVM", icon: "code" },
          { name: "Clean Architecture", icon: "layers" },
          { name: "Kotlin Flow", icon: "stream" },
        ],
        images: [],
      },
      {
        title: "Software Engineering Practices",
        description: (
          <>
            Strong foundation in{" "}
            <strong>SOLID principles, OOP, Clean Code, and CI/CD</strong>. Skilled
            in Git-based workflows, project management, and collaboration in
            cross-functional teams.
          </>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "CI/CD", icon: "pipeline" },
          { name: "OOP", icon: "code" },
          { name: "SOLID", icon: "layers" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
