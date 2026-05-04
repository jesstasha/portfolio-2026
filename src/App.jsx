import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const uxProjects = [
  {
    title: "Canva Projects Redesign",
    type: "UX / Product Design",
    summary:
      "A redesign concept for Canva’s Projects page, focused on improving long-term project discoverability through year-based navigation and clearer information hierarchy.",
    tags: ["UX Research", "Interaction Design", "React", "Case Study"],
  },
  {
    title: "SUNAPBOX",
    type: "iOS Product Concept",
    summary:
      "A short-form video organisation app that helps users save, arrange, search, and revisit videos through folder-based collection and AI-assisted tagging.",
    tags: ["SwiftUI", "Product Thinking", "AI Parser", "Mobile UX"],
  },
];

const gameProjects = [
  {
    title: "Earth Resonance",
    type: "Swift Student Challenge",
    summary:
      "A typing rhythm experience exploring ego, soul, and self-actualisation through interactive colour progression and reflective gameplay.",
    tags: ["Swift Playgrounds", "Game Design", "Interaction Loop"],
  },
  {
    title: "Anymore Farm",
    type: "Game Design Portfolio",
    summary:
      "A stealth evidence-collection game inspired by Animal Farm, where a joyful pig exposes corruption while questioning whether escape is truly possible.",
    tags: ["Narrative Design", "Stealth", "Systems Design"],
  },
];

function App() {
  const [page, setPage] = useState("ux");

  return (
    <main className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <header className="top-bar">
        <button className="logo" onClick={() => setPage("ux")}>
          Taekyung Lim
        </button>

        <nav className="nav-links">
          <button className={page === "ux" ? "active" : ""} onClick={() => setPage("ux")}>
            UX / Product
          </button>
          <button className={page === "games" ? "active" : ""} onClick={() => setPage("games")}>
            Game Development
          </button>
          <button className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>
            About
          </button>
        </nav>
      </header>

      {page === "ux" && (
        <>
          <Hero
            label="UX Portfolio 2026"
            title="I design thoughtful product experiences through research, interaction, and front-end craft."
            description="Computing student focused on UX / product design, interface systems, and human-centred digital experiences."
            focus={["Canva redesign case study", "SUNAPBOX mobile UX", "Product storytelling"]}
          />
          <ProjectPage
            number="01"
            title="UX / Product"
            description="Case studies focused on product thinking, discoverability, interaction flow, and user-centred design decisions."
            projects={uxProjects}
          />
        </>
      )}

      {page === "games" && (
        <>
          <Hero
            label="Game Development"
            title="I build playful systems that turn interaction into meaning."
            description="A collection of game and interactive projects exploring player feedback, narrative design, and systems thinking."
            focus={["Earth Resonance", "Anymore Farm", "Interactive systems"]}
          />
          <ProjectPage
            number="02"
            title="Game Development"
            description="Projects exploring systems, player feedback, narrative meaning, and playful experience design."
            projects={gameProjects}
          />
        </>
      )}

      {page === "about" && (
        <section className="content-section about-section single-page">
          <SectionIntro
            label="03"
            title="About"
            description="I enjoy building experiences that sit between design, code, storytelling, and interaction."
          />

          <div className="about-grid">
            <div className="glass-card about-card">
              <h3>What I care about</h3>
              <p>
                I am interested in thoughtful digital products, emotionally memorable interfaces,
                and systems that make complex things feel clear and approachable.
              </p>
            </div>

            <div className="glass-card about-card">
              <h3>Skills</h3>
              <p>
                React, JavaScript, SwiftUI, Java, Python, UX research, prototyping,
                interaction design, and game design.
              </p>
            </div>

            <div className="glass-card about-card">
              <h3>Contact</h3>
              <p>
                Email: <a href="mailto:your@email.com">your@email.com</a>
                <br />
                GitHub: <a href="https://github.com/jesstasha">jesstasha</a>
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function Hero({ label, title, description, focus }) {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-card glass-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{description}</p>
      </motion.div>

      <motion.div
        className="desktop-widget glass-card"
        initial={{ opacity: 0, y: 28, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="widget-header">
          <span />
          <span />
          <span />
        </div>
        <p className="widget-title">Current Focus</p>
        <ul>
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function ProjectPage({ number, title, description, projects }) {
  return (
    <section className="content-section">
      <SectionIntro label={number} title={title} description={description} />

      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ label, title, description }) {
  return (
    <motion.div
      className="section-intro"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <p>{label}</p>
      <h2>{title}</h2>
      <span>{description}</span>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const projectSlug = project.title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll("’", "")
    .replaceAll("'", "");

  const sectionIds = [
    [`${projectSlug}-overview`, "Overview"],
    [`${projectSlug}-problem`, "Problem"],
    [`${projectSlug}-pain-points`, "Pain Points"],
    [`${projectSlug}-solution`, "Solution"],
    [`${projectSlug}-implementation`, "Implementation"],
  ];

  const [activeSection, setActiveSection] = useState(sectionIds[0][0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0][0];

      sectionIds.forEach(([id]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 170) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectSlug]);

  return (
    <motion.article
      className="project-card glass-card case-study-card"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="project-meta">
        <span>{project.type}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="case-study-layout">
        <div className="case-study-long">
          <section id={`${projectSlug}-overview`}>
            <span>01 / Overview</span>
            <h4>{project.title}</h4>
            <p>
              This case study explains the project context, the design problem, the main user pain points,
              the proposed solution, and how the idea was translated into an interactive prototype.
            </p>
          </section>

          <section id={`${projectSlug}-problem`}>
            <span>02 / Problem</span>
            <h4>
              {project.title === "Canva Projects Redesign"
                ? "Older projects are hard to retrieve when users cannot remember the exact name."
                : "Saved short-form videos quickly become difficult to organise, revisit, and use intentionally."}
            </h4>
            <p>
              {project.title === "Canva Projects Redesign"
                ? "Canva supports recent access well, but becomes less effective when users need to find work created months or years ago. If a user cannot remember the project name, they are forced to rely on broad date sorting and visual scanning."
                : "Users often save useful videos across platforms, but the saved content becomes scattered and hard to retrieve later. The problem is not only saving content, but turning saved videos into an organised personal archive."}
            </p>
          </section>

          <section id={`${projectSlug}-pain-points`}>
            <span>03 / User Pain Points</span>
            <ul>
              {project.title === "Canva Projects Redesign" ? (
                <>
                  <li>No alternative retrieval method when the project name is forgotten.</li>
                  <li>Broad time sorting such as “Most recent” does not help users narrow older work precisely.</li>
                  <li>Related assets can appear as separate vertical items, increasing visual clutter and cognitive load.</li>
                </>
              ) : (
                <>
                  <li>Saved videos are spread across different apps and platforms.</li>
                  <li>Users may remember the vibe or purpose of a video, but not the exact title or source.</li>
                  <li>Manual organisation takes effort, so saved content easily becomes an unused archive.</li>
                </>
              )}
            </ul>
          </section>

          <section id={`${projectSlug}-solution`}>
            <span>04 / Solution</span>
            <h4>
              {project.title === "Canva Projects Redesign"
                ? "Introduce year-based filtering and clearer project grouping."
                : "Create a mobile system for saving, arranging, searching, and revisiting short-form videos."}
            </h4>
            <p>
              {project.title === "Canva Projects Redesign"
                ? "Year-based navigation reduces the search space and helps long-term users browse their creative history more intentionally. Grouping related project assets also makes the page easier to scan."
                : "SUNAPBOX organises videos through save flows, folders, swipe-based arranging, search, and AI-assisted tagging so users can retrieve saved videos based on meaning, context, and future use."}
            </p>
          </section>

          <section id={`${projectSlug}-implementation`}>
            <span>05 / Design & Implementation</span>
            <p>
              {project.title === "Canva Projects Redesign"
                ? "The redesign was planned as a UX case study and implemented as an interactive React prototype, showing both the information architecture and working UI behaviour."
                : "The app was designed and developed in SwiftUI, with future AI parser integration planned through a lightweight backend that converts natural language prompts into structured actions."}
            </p>
          </section>
        </div>

        <aside className="case-study-remote">
          <p>Case Study</p>
          {sectionIds.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </aside>
      </div>
    </motion.article>
  );
}


export default App;
