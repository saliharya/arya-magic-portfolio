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
        <strong className="ml-4">Queue Management System</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/enterprise-queue-management-system",
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
        <strong>Android Engineer</strong> specializing in{" "}
        <strong>Kotlin, Jetpack Compose, and real-time systems</strong> — with a growing
        focus on <strong>Kotlin Multiplatform</strong>. He builds production-grade
        Android software for high-stakes, 24/7 environments: a hospital queue system
        serving <strong>11,000+ patients per month</strong>, an enterprise MDM agent over
        MQTT and WebRTC, and a BLE pipeline he optimized from ~5 minutes to under 5
        seconds. A <strong>Dicoding Android Developer Expert</strong> and{" "}
        <strong>Bangkit Academy Distinction Graduate</strong> (led by Google, Tokopedia,
        Gojek, and Traveloka), he pairs clean architecture (MVVM, MVI, Clean
        Architecture) with measurable impact, and is open to relocation for the right
        Android or Kotlin Multiplatform role.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Sentuh Digital Teknologi",
        timeframe: "Nov 2025 – Present",
        role: "Android Developer (Kotlin)",
        achievements: [
          <>
            Build and maintain Android systems across <strong>7 product lines</strong> — 24/7 self-service
            kiosks, IoT devices, and real-time digital signage running continuously in production.
          </>,
          <>
            Delivered a hospital <strong>Queue Management System</strong> serving <strong>11,000+ patients
            per month</strong> at Medistra Hospital, with real-time updates over WebSocket.
          </>,
          <>
            Built the Android agent of an enterprise <strong>MDM platform</strong> — persistent MQTT command
            channel, WebRTC remote desktop, and a multi-tier remote-input pipeline for fleet management.
          </>,
          <>
            Shipped government and enterprise digital-signage platforms with live CMS integration for clients
            including <strong>BNI, AntaraNews, and Imigrasi</strong>, plus the <strong>Salin.Cloud</strong> file/text-sharing system.
          </>,
          <>
            Improved reliability through testing, code reviews, and cross-team collaboration with web and backend engineers.
          </>,
        ],
        images: [],
      },
      {
        company: "getgoing.co.id",
        timeframe: "Sep 2024 – May 2025",
        role: "React Native & React Developer",
        achievements: [
          <>
            Shipped three products: a <strong>React web admin dashboard</strong> and two{" "}
            <strong>React Native</strong> apps — the GetGoing customer app and the GetPartner app.
          </>,
          <>
            Translated Figma designs into responsive, reusable UI components across web and mobile.
          </>,
          <>
            Enhanced app stability by resolving bugs and refactored code toward modern best practices,
            improving readability and scalability.
          </>,
          <>
            Designed and deployed backend features using Cloud Functions integrated with Firestore.
          </>,
        ],
        images: [],
      },
      {
        company: "Telehealth Indonesia (Freelance)",
        timeframe: "Mar 2024 – Present",
        role: "Android Developer (Kotlin)",
        achievements: [
          <>
            Reduced BLE measurement time by <strong>over 98% — from ~5 minutes to under 5 seconds</strong> —
            across multiple Android devices in the ATM Sehat App.
          </>,
          <>
            Integrated medical device data (ketone, spirometer, hematocrit) via <strong>API and BLE</strong>{" "}
            into a unified Android platform, enhancing remote diagnostics.
          </>,
          <>
            Built <strong>E-Health Assistance</strong> to synchronize data and visualize health metrics with
            charts and history logs, improving patient dashboards for doctors and users.
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
        description: (
          <>Bachelor’s Degree in Informatics Engineering — GPA 3.80 / 4.00 (2021 – 2025).</>
        ),
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
          { name: "MVVM / MVI", icon: "code" },
          { name: "Clean Architecture", icon: "layers" },
          { name: "Kotlin Flow", icon: "stream" },
        ],
        images: [],
      },
      {
        title: "Real-time & IoT Systems",
        description: (
          <>
            Experienced in building production systems that run <strong>24/7</strong> — real-time sync
            over <strong>WebSocket</strong> and <strong>MQTT</strong>, <strong>BLE</strong> device
            integration, and <strong>WebRTC</strong> remote streaming for kiosks, medical devices, and
            fleet-managed Android hardware.
          </>
        ),
        tags: [
          { name: "WebSocket", icon: "stream" },
          { name: "MQTT", icon: "stream" },
          { name: "BLE", icon: "code" },
          { name: "WebRTC", icon: "code" },
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
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Becoming an Android Developer Expert",
        issuer: "Dicoding Indonesia",
        timeframe: "Issued Mar 2024 · Expires Mar 2027",
        credentialId: "81P2VWVYOPOY",
        link: "https://www.dicoding.com/certificates/81P2VWVYOPOY",
      },
      {
        name: "Learn Intermediate Android Application Development",
        issuer: "Dicoding Indonesia",
        timeframe: "Issued Nov 2023 · Expires Nov 2026",
        credentialId: "JMZV171VJXN9",
        link: "https://www.dicoding.com/certificates/JMZV171VJXN9",
      },
      {
        name: "Learn Git Basics with GitHub",
        issuer: "Dicoding Indonesia",
        timeframe: "Issued Aug 2023 · Expires Aug 2026",
        credentialId: "1OP808JRQXQK",
        link: "https://www.dicoding.com/certificates/1OP808JRQXQK",
      },
      {
        name: "Learn SOLID Programming Principles",
        issuer: "Dicoding Indonesia",
        timeframe: "Issued Sep 2023 · Expires Sep 2026",
        credentialId: "81P27QELYZOY",
        link: "https://www.dicoding.com/certificates/81P27QELYZOY",
      },
      {
        name: "Bangkit Academy Distinction Graduate",
        issuer: "Bangkit led by Google, GoTo & Traveloka",
        timeframe: "Issued Jan 2024",
        credentialId: "BA23/DIST/XXIV-01/A179BSY2696",
      },
    ],
  },
  testimonials: {
    display: true,
    title: "Recommendations",
    defaultVisible: 2,
    items: [
      {
        quote: (
          <>
            I mentored Arya from the time he was just getting started with coding, and now he picks
            up complex tasks with confidence. We&apos;ve worked together on projects like ATM Sehat,
            integrating Android apps with healthcare IoT devices, and he&apos;s currently at Sentuh
            focusing on Android integration with backend services and IoT devices. Besides Android,
            he&apos;s been learning Flutter, <strong>Kotlin Multiplatform</strong>, and Go — he&apos;s
            never satisfied with knowing just one thing. If you&apos;re a recruiter or hiring manager
            looking for someone with strong growth potential and a great attitude, I&apos;d definitely
            recommend giving Arya a chance.
          </>
        ),
        name: "Arga Hutama",
        role: "Software Engineer at HungerStation (Delivery Hero), ex-Gojek · mentored Arya directly",
        linkedIn: "https://www.linkedin.com/in/argahut/",
      },
      {
        quote: (
          <>
            I had the opportunity to work with Salih at Sentuh Digital Teknologi, and it was a great
            experience. Salih stands out for his strong communication skills, which make collaboration
            smooth and effective across teams. He is also a deep learner and dedicated researcher who
            consistently shows curiosity, analytical thinking, and a strong commitment to understanding
            things thoroughly. I believe Salih has great potential to contribute meaningfully in any
            team or organization.
          </>
        ),
        name: "M. Aldhika Yandaputra",
        role: "Software Engineer · worked with Arya at Sentuh Digital Teknologi",
        linkedIn: "https://www.linkedin.com/in/m-aldhika-yandaputra-42a12a1b3/",
      },
      {
        quote: (
          <>
            Salih has a solid technical foundation, particularly in <strong>Android Development and
            Kotlin</strong>, and consistently showed initiative in solving problems within the team.
            He communicates clearly and is great to discuss both technical and day-to-day
            problem-solving challenges with. I&apos;d recommend him to any team looking for a reliable
            developer who&apos;s always eager to learn.
          </>
        ),
        name: "Rian Ihsan Ardiansyah",
        role: "Golang Engineer at PT Sarana Pactindo · worked with Arya at Sentuh",
        linkedIn: "https://www.linkedin.com/in/rianihsan/",
      },
      {
        quote: (
          <>
            Whenever we discovered bugs or integration issues between the web and Android
            applications, Arya was proactive in discussing the problem, investigating the cause,
            and working together to find the right solution. His cooperative attitude and strong
            communication made troubleshooting much easier. I&apos;d recommend Arya to any team
            looking for a reliable Android Developer who communicates well and collaborates across teams.
          </>
        ),
        name: "Haikal Apriansyah",
        role: "Frontend Developer at Sentuh Digital Teknologi",
        linkedIn: "https://www.linkedin.com/in/haikal-apriansyah-004849291/",
      },
      {
        quote: (
          <>
            He is a dedicated Android Developer who quickly understands requirements and
            consistently delivers high-quality work. He is collaborative, reliable, and always
            open to feedback, making him an excellent teammate. I highly recommend him to anyone
            looking for a skilled and dependable Android Developer.
          </>
        ),
        name: "Revanza Firdaus",
        role: "Software Engineer · worked with Arya on the same team",
        linkedIn: "https://www.linkedin.com/in/revanza-firdaus-2801a6292/",
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
