import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    type: "2026 Apple Swift Student Challenge",
    summary:
      "A typing rhythm experience exploring ego, soul, and self-actualisation through interactive colour progression and reflective gameplay.",
    tags: ["", "Swift Playgrounds", "Game Design", "Interaction Loop"],
    link: "https://jesstasia.itch.io/earth-resonance",
  },
  {
    title: "Mask The Wild",
    type: "Global Game Jam 2026",
    summary: "A quiz-based RPG progression game built in 48 hours. I was the lead programmer, implementing the core game loop in Unity and collaborating with the team through Git/GitHub.",
    tags: ["Unity", "C#", "Git/GitHub"],
    image: "/portfolio-2026/maskthewild.png",
    link: "https://globalgamejam.org/games/2026/mask-wild-1",
  },
  {
    title: "Nucleoblob",
    type: "People's Choice 3rd · 2025 CISSA X GMC Game Jam",
    summary: "Puzzle game co-created in 72 hours. Contributed narrative, level art in Aseprite, and gameplay scripting in Godot.",
    tags: ["Godot", "GDScript", "Aseprite"],
    image: "/portfolio-2026/nucleoblob.png",
    link: "https://yukebin.itch.io/nucleaobob",
  },
  {
    title: "Anymore Farm",
    type: "Game Design Document · Independent Project",
    summary:
      "A stealth investigation game inspired by Animal Farm. The player gathers photographic evidence of corruption, manages suspicion, and broadcasts the truth before time runs out.",
    tags: ["Game Design", "GDD", "Mechanic Design", "Level Design", "Godot"],
    caseStudy: "anymore-farm",
  },
  {
    title: "Ringworld",
    type: "Board Game Prototype · 2026 Game Design Subject",
    summary:
      "A sci-fi territory control board game prototype exploring expansion, resource management, and strategic decision-making through iterative playtesting.",
    tags: ["Board Game", "Prototype", "Playtesting", "Iteration"],
    caseStudy: "ringworld",
  },
];

function App() {
  const [page, setPage] = useState("ux");
  const [showFunFact, setShowFunFact] = useState(false);
  const [activeAboutSection, setActiveAboutSection] = useState("about");

  useEffect(() => {
    if (page !== "about") return;

    const aboutSections = ["about", "more-about-me", "contact"];

    const handleAboutScroll = () => {
      let current = "about";
      let bestDistance = Infinity;
      const targetY = window.innerHeight * 0.42;

      aboutSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetY);

        if (rect.top < window.innerHeight && rect.bottom > 0 && distance < bestDistance) {
          bestDistance = distance;
          current = id;
        }
      });

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight - scrollBottom < 80) {
        current = "contact";
      }

      setActiveAboutSection(current);
    };

    handleAboutScroll();
    window.addEventListener("scroll", handleAboutScroll);
    window.addEventListener("resize", handleAboutScroll);
    return () => {
      window.removeEventListener("scroll", handleAboutScroll);
      window.removeEventListener("resize", handleAboutScroll);
    };
  }, [page]);

  return (
    <>
    <div className="background-orb orb-one" />
    <div className="background-orb orb-two" />
    <div className="background-orb orb-three" />

    <main className="site-shell">
      <ClickSparkle />

      <header className="top-bar">
        <button className="logo" onClick={() => setPage("ux")}>
          Portfolio
        </button>

        <nav className="nav-links">
          <button className={page === "ux" ? "active" : ""} onClick={() => setPage("ux")}>
            UX / Product
          </button>
          <button className={page === "games" ? "active" : ""} onClick={() => setPage("games")}>
            Game Development
          </button>
          <button className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>
            About Me
          </button>
        </nav>
      </header>

      {page === "ux" && (
        <>
          <Hero
            label=""
            title="Hi, I'm Taekyung, Jessica Lim"
            description="I design thoughtful product experiences through research, interaction, and front-end craft. Computing student focused on UX / product design, interface systems, and human-centred digital experiences."
            focus={["<strong>Canva redesign case study</strong>", "<strong>SUNAPBOX mobile UX</strong>", "Product storytelling"]}
          />
          <ProjectPage
            number="01"
            title="UX / Product"
            description=""
            projects={uxProjects}
          />
        </>
      )}

      {page === "games" && (
        <>
<ProjectPage
            number="02"
            title="Game Development"
            description=""
            projects={gameProjects}
          />
        </>
      )}

      {page === "about" && (
        <section id="about" className="content-section about-section single-page">
          <div className="project-page-layout">

            <div>
              <SectionIntro
                label="03"
                title="About Me"
                description=""
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
                Email: <a href="mailto:gueong26396@email.com">gueong26396@email.com</a>
                <br />
                GitHub: <a href="https://github.com/jesstasha">jesstasha</a>
              </p>
            </div>
              </div>


              <section id="more-about-me" className="more-about-panel glass-card">
                <h3>More About Me</h3>
                <p>
                  
                </p>

                <div className="activity-stack">
                  <article className="activity-card glass-card">
                    <div className="project-meta">
                      <span>Student Society · Product Role</span>
                    </div>

                    <h4 className="game-title-row">
  <span>CISSA Product Officer</span>

  <a
    className="inline-project-link"
    href="https://cissa.org.au/"
    target="_blank"
    rel="noreferrer"
  >
    View Project ↗
  </a>
</h4>
                    <p className="activity-summary">
                      Supporting student-facing product experiences through community, events, and digital interaction.
                    </p>

                    <div className="tag-row">
                      <span>#Product Thinking</span>
                      <span>#Student Community</span>
                      <span>#Event UX</span>
                    </div>

                    <div className="activity-sections">
                      <section>
                        <span>01 / Overview</span>
                        <p>
                          A student society product role focused on supporting digital experiences, events, and community-facing initiatives.
                        </p>
                      </section>

                      <section>
                        <span>02 / Video</span>

                        <div className="media-window">
                          <div className="media-window-bar">
                            <span></span><span></span><span></span>
                          </div>
                          <video
                            className="tooldi-video"
                            src="/portfolio-2026/videos/about/cissa.MOV"
                            controls
                            playsInline
                          />
                        </div>
                      </section>

                      <section>
                        <span>03 / Photos</span>

                        <div className="media-window">
                          <div className="media-window-bar">
                            <span></span><span></span><span></span>
                          </div>
                          <PhotoFold
                            images={[
                              "/portfolio-2026/images/about/cissa-01.png",
                              "/portfolio-2026/images/about/cissa-02.png",
                            ]}
                            alt="CISSA activity photo"
                          />
                        </div>
                      </section>

                      <section>
                        <span>04 / What I Do</span>
                        <p>
                          I contribute to product-oriented planning, user-facing communication, and experience design for student initiatives.
                        </p>
                      </section>

                      <section>
                        <span>05 / What I Learn</span>
                        <p>
                          This experience helps me understand how product thinking works in a real community context, where clarity, usability, and collaboration matter.
                        </p>
                      </section>
                    </div>
                  </article>

                  <article className="activity-card glass-card">
                    <div className="project-meta">
                      <span>Marketing Supporters · Design Tool</span>
                    </div>

                    <h4 className="game-title-row">
  <span>Tooldi Marketing Supporters</span>

  <a
    className="inline-project-link"
    href="https://blog.naver.com/muremu/223326616383"
    target="_blank"
    rel="noreferrer"
  >
    View Project ↗
  </a>
</h4>
                    <p className="activity-summary">
                      Creating marketing and design-tool content through visual storytelling and practical creative workflows.
                    </p>

                    <div className="tag-row">
                      <span>#Content Design</span>
                      <span>#Marketing</span>
                      <span>#Design Tools</span>
                    </div>

                    <div className="activity-sections">
                      <section>
                        <span>01 / Overview</span>
                        <p>
                          A marketing supporters activity where I explored design-tool content, visual communication, and creative promotion.
                        </p>
                      </section>

                      <section>
                        <span>02 / Photo / Video</span>
                        <div className="media-window">
                          <div className="media-window-bar">
                            <span></span><span></span><span></span>
                          </div>
                          <video
                            className="tooldi-video"
                            src="/portfolio-2026/videos/about/tooldi.mp4"
                            controls
                            playsInline
                          />
                        </div>
                      </section>

                      <section>
                        <span>03 / What I Do</span>
                        <p>
                          I created and supported marketing content while experimenting with tool-based design workflows and visual storytelling.
                        </p>
                      </section>

                      <section>
                        <span>04 / What I Learn</span>
                        <p>
                          This helped me connect design execution with audience communication, brand tone, and practical content-making.
                        </p>
                      </section>
                    </div>
                  </article>
                </div>
              </section>

              <div id="contact" className="about-bottom-grid">
                <div className="funfact-panel glass-card">
                  <h3>Fun Fact</h3>

                  <div className="pixel-room">
                    <img className="pixel-bg" src="/portfolio-2026/images/about/funfact-bg.png" alt="" />
                    <img className="pixel-character" src="/portfolio-2026/images/about/kaya.gif" alt="Pixel character" />

                    {showFunFact && (
                      <div className="pixel-speech">
                        Actually, I also designed the cursor for this portfolio.
                      </div>
                    )}

                    <button
                      type="button"
                      className="funfact-button"
                      onClick={() => setShowFunFact((prev) => !prev)}
                    >
                      Fun fact
                    </button>
                  </div>
                </div>

                <div className="contact-panel glass-card">
                  <h3>Contact</h3>
                  <form action="mailto:gueong26396@email.com" method="post" encType="text/plain">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email *" required />
                    <input type="text" name="phone" placeholder="Phone number" />
                    <textarea name="message" placeholder="Comment" rows="5"></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>

            <aside className="case-study-remote page-remote">
              <p>Page Guide</p>

              <nav>
                <a href="#about" className={activeAboutSection === "about" ? "active" : ""}>About Me</a>
                <a href="#more-about-me" className={activeAboutSection === "more-about-me" ? "active" : ""}>More About Me</a>
                <a href="#contact" className={activeAboutSection === "contact" ? "active" : ""}>Fun Fact & Contact</a>
              </nav>
            </aside>

          </div>
        </section>
      )}
    </main>
    </>
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
        <h1 className="hero-title">{title}</h1>

        <div className="hero-socials">
          <a href="https://github.com/jesstasha" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jessica-lim-7139432b6/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <p className="hero-copy">{description}</p>
      </motion.div>

      <FlipCard />
    </section>
  );
}


function MediaFold({ items, alt }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  const nextMedia = () => {
    setActive((value) => (value + 1) % items.length);
  };

  return (
    <div className="photo-fold-stage">
      <div className="photo-fold-card photo-fold-front" key={active}>
        {current.type === "video" ? (
          <video
            className="tooldi-video"
            src={current.src}
            controls
            playsInline
          />
        ) : (
          <img src={current.src} alt={alt} />
        )}
      </div>

      <button type="button" className="photo-fold-next" onClick={nextMedia} aria-label="Next media">
        &gt;
      </button>
    </div>
  );
}


function PhotoFold({ images, alt, className = "" }) {
  const [active, setActive] = useState(0);

  const nextPhoto = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const previous = images[(active - 1 + images.length) % images.length];

  return (
    <div className={`photo-fold-stage ${className}`}>
      <div className="photo-fold-card photo-fold-back">
        <img src={previous} alt={alt} />
      </div>

      <div className="photo-fold-card photo-fold-front" key={active}>
        <img src={images[active]} alt={alt} />
      </div>

      <button type="button" className="photo-fold-next" onClick={nextPhoto} aria-label="Next photo">
        &gt;
      </button>
    </div>
  );
}


function ProjectPage({ number, title, description, projects }) {
  const sectionItems = projects.flatMap((project) => {
    const slug = project.title
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("/", "")
      .replaceAll("’", "")
      .replaceAll("'", "");

    if (project.caseStudy === "anymore-farm") {
      return [
        [`${slug}-overview`, project.title],
        [`${slug}-design-goal`, "Prototype"],
        [`${slug}-core-loop`, "Concept Development"],
        [`${slug}-systems`, "Mechanic Design"],
      ];
    }

    if (project.caseStudy === "ringworld") {
      return [
        [slug, project.title],
        [`${slug}-playtesting`, "Playtesting Report"],
      ];
    }

    if (project.image) {
      return [[slug, project.title]];
    }
    if (project.title === "Earth Resonance") {
      return [
        [`${slug}-overview`, project.title],
        [`${slug}-problem`, "Design Decision"],
        [`${slug}-solution`, "Level Design"],
        [`${slug}-process`, "System Design"],
      ];
    }

    return [
      [`${slug}-overview`, project.title],
      [`${slug}-problem`, "Problem"],
      [`${slug}-pain-points`, "Pain Points"],
      [`${slug}-solution`, "Solution"],
      [`${slug}-process`, "Process"],
      [`${slug}-learning`, "Learning"],
    ];
  });

  const [activeSection, setActiveSection] = useState(sectionItems[0][0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionItems[0][0];

      sectionItems.forEach(([id]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 170) current = id;
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <section className="content-section">
      <SectionIntro label={number} title={title} description={description} />

      <div className="project-page-layout">
        <div className="project-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <aside className="case-study-remote page-remote">
          <p>Page Guide</p>
          {sectionItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              className={[
                activeSection === id ? "active" : "",
                id === "ringworld" ||
                label.includes("Canva") ||
                label.includes("SUNAPBOX") ||
                label.includes("Earth") ||
                label.includes("Mask") ||
                label.includes("Nucleoblob") ||
                label.includes("Anymore")
                  ? "important-guide-link"
                  : ""
              ].filter(Boolean).join(" ")}
            >
              {label}
            </a>
          ))}
        </aside>
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

  return (
    <motion.article
      id={projectSlug}
      className="project-card glass-card case-study-card"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="project-meta">
        <span>{project.type}</span>
      </div>

      <h3 className="game-title-row">
  <span>{project.title}</span>

  {project.link && (
    <a
      className="inline-project-link"
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      View Project ↗
    </a>
  )}
</h3>
      <p>{project.summary}</p>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      {project.caseStudy === "anymore-farm" && (
        <div className="case-study-long anymore-case-study">
          <section id={`${projectSlug}-overview`}>
            <span>01 / Overview</span>
            <h4>Pixel-art stealth RPG inspired by Animal Farm.</h4>

            <ul>
              <li>Original solo game design and prototype project.</li>
              <li>Investigate corruption while freely exploring an animal village.</li>
              <li>Expose hidden acts through a live broadcasting mechanic.</li>
              <li>Manage suspicion while navigating moral and psychological tension.</li>
            </ul>

            <figure className="anymore-slide">
              <img
                src="/portfolio-2026/portfolio_pngs/overview.png"
                alt="Anymore Farm theme, gameplay, aesthetic and executive summary"
              />
              <figcaption>
                Theme, player experience, core gameplay and project overview.
              </figcaption>
            </figure>
          </section>

          <section id={`${projectSlug}-design-goal`}>
            <span>02 / Prototype</span>
            <h4>Connect political themes to actions the player performs.</h4>

            <ul>
              <li>Communicate corruption through exploration and observation rather than exposition alone.</li>
              <li>Use cute pixel art to contrast with unsettling spaces and subject matter.</li>
              <li>Support meaningful play through restraint, judgement and visible consequences.</li>
            </ul>

            <figure className="anymore-slide">
              <img
                src="/portfolio-2026/portfolio_pngs/prototype.png"
                alt="Anymore Farm character sprites, tilemap layers and building prototypes"
              />
              <figcaption>
                Character, environment and tilemap prototypes developed for the game world.
              </figcaption>
            </figure>


            <figure className="anymore-slide">
              <img
                src="/portfolio-2026/portfolio_pngs/level_design.png"
                alt="Anymore Farm spiral village map and visual development"
              />
              <figcaption>
                Farm map structure and original pixel-art building development.
              </figcaption>
            </figure>
          </section>

          <section id={`${projectSlug}-core-loop`}>
            <span>03 / Concept Development</span>
            <h4>From Stoicism to interactive player choices.</h4>

            <ul>
              <li>Explore how values can be communicated through gameplay systems.</li>
              <li>Transform philosophical ideas into player decisions and consequences.</li>
              <li>Combine mechanics and narrative to create meaningful player experiences.</li>
              <li>Develop Anymore Farm as a value-driven game about corruption and moral choices.</li>
            </ul>

            <figure className="anymore-slide">
              <img
                src="/portfolio-2026/stoic.png"
                alt="Anymore Farm gameplay pillars, progression and core gameplay loop"
              />
              <figcaption>
                Gameplay pillars, three-act progression and the investigation–exposure loop.
              </figcaption>
            </figure>
          </section>

          <section id={`${projectSlug}-systems`}>
            <span>04 / Mechanic Design</span>
            <h4>Connected systems turn investigation into tension and consequence.</h4>

            <ul>
              <li><strong>Live Broadcasting:</strong> exposes corruption to the entire farm.</li>
              <li><strong>Suspicion:</strong> raises the risk of punishment after suspicious actions.</li>
              <li><strong>Stealth:</strong> requires careful movement and observation.</li>
              <li><strong>Targeting:</strong> adds precision to the act of documenting corruption.</li>
            </ul>

            <div className="anymore-slide-stack">
              <figure className="anymore-slide">
                <img
                  src="/portfolio-2026/portfolio_pngs/mechanic.png"
                  alt="Anymore Farm gameplay mechanic overview"
                />
                <figcaption>
                  Player interaction, gameplay pillars, progression and mechanic flow.
                </figcaption>
              </figure>

              <figure className="anymore-slide">
                <img
                  src="/portfolio-2026/portfolio_pngs/mechanic_two.png"
                  alt="Anymore Farm live broadcasting, suspicion, stealth and targeting systems"
                />
                <figcaption>
                  Detailed system descriptions and design reflection.
                </figcaption>
              </figure>
            </div>
          </section>


        </div>
      )}

      {project.image && (
        <div className="media-window game-media-window">
          <div className="media-window-bar">
            <span></span><span></span><span></span>
          </div>

          <img
            className="game-showcase-image"
            src={project.image}
            alt={project.title}
          />
        </div>
      )}

      {project.caseStudy === "ringworld" && (
        <div id={projectSlug} className="case-study-long ringworld-case-study">
          <section id={`${projectSlug}-playtesting`}>
            <span>01 / Playtesting Report</span>

            <h4>
              Playtesting feedback informed balancing and gameplay improvements.
            </h4>

            <p>
              This report summarises multiple playtesting sessions for Ringworld, documenting player
              feedback, gameplay balance issues, rule clarity, and proposed improvements following testing.
            </p>

            <PhotoFold
              images={[
                "/portfolio-2026/playtest-report/playtesting_1.png",
                "/portfolio-2026/playtest-report/playtesting_2.png",
                "/portfolio-2026/playtest-report/playtesting_3.png",
              ]}
              alt="Ringworld playtesting report"
              className="playtest-report-slider"
            />
          </section>
        </div>
      )}

      {!project.image && !project.caseStudy && <div className="case-study-long">
          <section id={`${projectSlug}-overview`}>
            <span>01 / Overview</span>
            <h4>{project.title}</h4>
            <p>
              This case study explains the project context, the design problem, the main user pain points,
              the proposed solution, and how the idea was translated into an interactive prototype. The app was designed and developed in SwiftUI, with future AI parser integration planned through a lightweight backend that converts natural language prompts into structured actions. The redesign was planned as a UX case study and implemented as an interactive React prototype, showing both the information architecture and working UI behaviour.
            </p>
          </section>

                              <section id={`${projectSlug}-problem`}>
            <span>02 / Design Decision</span>
            {project.title === "Earth Resonance" ? (
              <>
              <div className="media-window">
                <div className="media-window-bar">
                  <span></span><span></span><span></span>
                </div>

                <video
                  className="tooldi-video"
                  src="/portfolio-2026/videos/about/earth-resonance-demo.MOV"
                  controls
                  playsInline
                />
              </div>

              <p>
                Design process video: Apple Swift Student Challenge - Resonance.
                This video demonstrates how abstract psychological concepts were translated into interactive gameplay.
                The progression system, input mechanics, and branching outcomes were designed to communicate the contrast between self-actualisation and ego-driven goals through player choices.
              </p>
              </>
            ) : (
              <h4>
                {project.title === "Canva Projects Redesign"
                  ? "Older projects are hard to retrieve when users cannot remember the exact name."
                  : "Saved short-form videos quickly become difficult to organise, revisit, and use intentionally."}
              </h4>
            )}

            {project.title === "Canva Projects Redesign" && (
              <div className="media-window problem-media-window">
                <div className="media-window-bar">
                  <span></span><span></span><span></span>
                </div>

                <img
                  src="/portfolio-2026/canvaredesign.png"
                  alt="Canva retrieval problem analysis"
                  className="problem-analysis-image"
                />
              </div>
            )}
            <p>
              {project.title === "Canva Projects Redesign"
                ? "Users struggle to retrieve past projects when they cannot recall the project name, and the current “Recent” sorting forces inefficient visual scanning. This issue becomes more significant over time, as Canva is not a short-form content platform but a long-term creative archive. Users accumulate a large number of meaningful projects across months or years, making time-based access a critical part of the experience."
                : project.title === "SUNAPBOX" ? "Users often save useful videos across platforms, but the saved content becomes scattered and hard to retrieve later. The problem is not only saving content, but turning saved videos into an organised personal archive." : ""}
            </p>
            <p>
              {project.title === "Canva Projects Redesign"
                ? "However, the current filtering system follows a feed-based logic (e.g. “Last 30 days”), which prioritises recency over retrieval. While effective for accessing recent work, it does not support users who are trying to find older projects. As a result, users are forced to manually scan through large project lists, increasing cognitive load and making retrieval inefficient. This reveals a mismatch between feed-based interaction patterns and archive-based user behaviour."
                : ""}
            </p>
          </section>

          {project.title === "Canva Projects Redesign" && (
            <section id={`${projectSlug}-pain-points`}>
              <span>03 / User Pain Points</span>
              <ul>
                <li>No alternative retrieval method when the project name is forgotten.</li>
                <li>Broad time sorting such as “Most recent” does not help users narrow older work precisely.</li>
                <li>Related assets can appear as separate vertical items, increasing visual clutter and cognitive load.</li>
              </ul>
            </section>
          )}

          <section id={`${projectSlug}-solution`}>
            <span>
              {project.title === "Earth Resonance"
                ? "03 / Level Design Layouts"
                : "04 / Solution"}
            </span>

            <h4>
              {project.title === "Canva Projects Redesign"
                ? "Introduce year-based filtering and clearer project grouping."
                : project.title === "SUNAPBOX"
                  ? "Create a mobile system for saving, arranging, searching, and revisiting short-form videos."
                  : "Maslow’s hierarchy structures the five-level progression, while Jung’s ego/self concept shapes the two gameplay paths."}
            </h4>

            {project.title === "Earth Resonance" && (
              <p>
                Inspired by Jung&apos;s ego/self concept and Maslow&apos;s five needs. Each level maps to a need (survival → self-actualisation). The main challenge was making psychological concepts feel intuitive through gameplay mechanics rather than explanation.
              </p>
            )}

            <p>
              {project.title === "Canva Projects Redesign"
                ? "Year-based navigation reduces the search space and helps long-term users browse their creative history more intentionally. Grouping related project assets also makes the page easier to scan."
                : project.title === "SUNAPBOX"
                  ? "SUNAPBOX organises videos through save flows, folders, swipe-based arranging, search, and AI-assisted tagging so users can retrieve saved videos based on meaning, context, and future use."
                  : "Each level moves from survival to self-actualisation through a red-to-blue progression. In SOUL MODE, players type level-specific words and continue toward the reflective ending. In EGO MODE, players may type any word for score and ranking, but lose access to the SOUL ending."}
            </p>


            {project.title === "Earth Resonance" && (
              <img
                src="/portfolio-2026/portfolio_pngs/ego_soul_mode.png"
                alt="Earth Resonance SOUL MODE and EGO MODE level design layouts"
                style={{
                  width: "40%",
                  display: "block",
                  margin: "24px auto",
                  borderRadius: "12px"
                }}
              />
            )}
          </section>

          <section id={`${projectSlug}-process`}>
            <span>04 / System Design Documents</span>

            {project.title === "Earth Resonance" ? (
              <>
                <h4>
                  System architecture, progression, timing, and branching outcomes.
                </h4>

                <p>
                  A two-page system design document outlining the game&apos;s screen flow,
                  shared state, timing and judgement system, level progression, and
                  branching endings.
                </p>

                <PhotoFold
                  images={[
                    "/portfolio-2026/portfolio_pngs/system_design_1.png",
                    "/portfolio-2026/portfolio_pngs/system_design_2.png",
                  ]}
                  alt="Earth Resonance system design document"
                  className="system-design-slider"
                />
              </>
            ) : (
              <p>
                {project.title === "Canva Projects Redesign"
                  ? "I focused on turning a familiar interface problem into a clear product-design case study. The main challenge was not simply making the page look different, but identifying why older projects become difficult to retrieve and translating that problem into a practical navigation idea."
                  : "I focused on shaping SUNAPBOX as a product concept that connects saving, organising, searching, and revisiting short-form videos. The main challenge was keeping the flow simple while still showing how AI-assisted tagging and folder-based organisation could support real user behaviour."}
              </p>
            )}
          </section>

          {project.title !== "Earth Resonance" && (
            <section id={`${projectSlug}-learning`}>
              <span>06 / What I Learned</span>
              <p>
                {project.title === "Canva Projects Redesign"
                  ? "I learned how important information hierarchy is when designing for long-term use. A product can feel easy for recent actions but still become difficult when users return months or years later, so retrieval and memory support need to be considered as part of the experience."
                  : "I learned how product thinking can turn a personal pain point into a structured mobile experience. Designing SUNAPBOX helped me think more deeply about how users save content emotionally, forget details over time, and need flexible ways to recover meaning later."}
              </p>
            </section>
          )}
      </div>}
    </motion.article>
  );
}




function ClickSparkle() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const id = Date.now();

      setSparkles((prev) => [
        ...prev,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== id));
      }, 650);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="click-sparkle-layer">
      {sparkles.map((sparkle) => (
        <img
          key={sparkle.id}
          className="click-sparkle"
          src="/portfolio-2026/cursor.gif"
          alt=""
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        />
      ))}
    </div>
  );
}


function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  const playFlipSound = () => {
    const audio = new Audio(`${import.meta.env.BASE_URL}sounds/chiriring.mp3`);
    audio.volume = 0.35;
    audio.play().then(() => console.log("sound played")).catch((error) => console.log("sound error", error));
  };

  return (
    <div
        className="flip-card"
        onClick={() => {
          playFlipSound();
          setFlipped(!flipped);
        }}
      >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-face flip-front glass-card">
          <div className="click-me-badge">Click me!</div>
          <img className="hero-profile-image" src="/portfolio-2026/jess_profile.png" alt="Portfolio profile" />

          <div className="id-card-footer">
            <div>
              <p className="id-school">University of<br />Melbourne</p>
              <p className="id-major">Computer Science Major</p>
            </div>

            <div className="id-code">
              <div className="fake-barcode" />
            </div>
          </div>
        </div>

        <div className="flip-card-face flip-back">
          <div className="back-inner">
            <p className="back-title"><span className="diamond-icon">✦</span> EXPERIENCE</p>
            <p><strong>2024 CISSA · Product Officer</strong></p>
            <p className="exp-note">Unimelb Computing & Information Systems Student Association</p>

            <p><strong>2024 Tooldi · Marketing Ambassador</strong></p>
            <p className="exp-note">Korean digital design template platform</p>

            <p className="back-title"><span className="diamond-icon">✦</span> SKILLS</p>

            <div className="flip-skill-grid">
              <div className="skill-stat"><p>Python</p><span>★★★★★</span></div>
              <div className="skill-stat"><p>Figma</p><span>★★★★★</span></div>
              <div className="skill-stat"><p>C</p><span>★★★★☆</span></div>
              <div className="skill-stat"><p>Java</p><span>★★★★☆</span></div>
              <div className="skill-stat"><p>JavaScript</p><span>★★★☆☆</span></div>
              <div className="skill-stat"><p>React</p><span>★★★☆☆</span></div>
              <div className="skill-stat"><p>Swift</p><span>★★☆☆☆</span></div>
              <div className="skill-stat"><p>Git/GitHub</p><span>★★★☆☆</span></div>
              <div className="skill-stat"><p>Godot</p><span>★★☆☆☆</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;