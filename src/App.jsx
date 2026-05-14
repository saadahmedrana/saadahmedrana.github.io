export default function App() {
  const headingClass = "font-black leading-[1.03] tracking-[-0.035em]";
  const displayClass = "font-black leading-[1] tracking-[-0.045em]";
const selectedWork = [
  {
    title: "AnchorMap",
    subtitle:
      "A Multi-Agent Pipeline for Variable Standardisation in Maritime Engineering",
    type: "ECMS Publication",
    year: "2026",
    summary:
      "Published research on a schema-driven multi-agent pipeline that standardises heterogeneous maritime engineering variables using embeddings, conditional LLM reasoning, and confidence-based human review.",
    stack: "LLMs · Maritime engineering · JSON-LD · VIS · Human-in-the-loop",
    link: "https://www.icloud.com/iclouddrive/009gotgZBpDEThn0jEVz921-A#ecms2026proceed_complete",
    image: "ECMS",
    imageSrc: "/images/anchormap-diagram.png",
    imageAlt: "AnchorMap multi-agent pipeline diagram",
    imageFit: "contain",
  },
  {
    title: "Authenticating Gate for Safe Robot Entry",
    subtitle:
      "Presented at the 10th Baltic Mechatronics Symposium in Tallinn",
    type: "Conference Publication",
    year: "2025",
    summary:
      "Presented at the 10th Baltic Mechatronics Symposium in Tallinn and published in the proceedings of the 10th Baltic Mechatronics Symposium. The project developed a restricted-access gate prototype for autonomous mobile robots using RFID authentication, ToF safety monitoring, Arduino-based control, and a mechanical gate mechanism.",
    stack: "AMRs · RFID · ToF sensors · Arduino · Robot safety · Access control",
    link: "https://aaltodoc.aalto.fi/server/api/core/bitstreams/e14c91de-446e-4e4b-ab7f-f3dfa898fa3e/content",
    image: "BMS",
    imageSrc: "/images/robogate.jpg",
    imageAlt: "Authentication gate prototype for safe robot entry",
    imageFit: "cover",
  },
  {
    title: "Translating Maritime Regulations into Machine-Readable Rules",
    subtitle: "Master’s thesis research at Aalto University",
    type: "Thesis Research",
    year: "2026",
    summary:
      "LLM-assisted requirements-to-logic pipeline that converts natural-language maritime regulations into executable SHACL constraints for validation over RDF ship design graphs.",
    stack:
      "LLMs · SHACL · RDF · JSON-LD · TRAFICOM · Requirements-to-logic",
    link: "https://github.com/saadahmedrana/Translating-Natural-Language-Maritime-Regulations-into-Machine-Readable-Rules-Using-LLMs",
    image: "THESIS",    imageSrc: "/images/masterthesis.png",
    imageAlt: "Reg2Logic single-case pipeline for translating maritime regulations into executable SHACL validation",
    imageFit: "contain",  },
  {
    title: "RAG Chatbot for Marine Engineering",
    subtitle: "Document-grounded engineering question answering",
    type: "LLM System Prototype",
    year: "2025",
    summary:
      "Developed a retrieval-augmented chatbot for querying marine-industry engineering documentation and answering technical questions from domain-specific sources.",
    stack: "RAG · LLMs · NLP · Python · Marine engineering",
    link: "https://github.com/saadahmedrana/OLLAMA_CHATBOT",
    image: "RAG",
    imageSrc: "/images/ragchatbot.png",
    imageAlt: "RAG chatbot interface for marine engineering",
    imageFit: "cover",
  },
  {
    title: "Digital Twin Lab Model",
    subtitle: "Simulation and visualisation of laboratory systems",
    type: "Digital Twin Project",
    year: "2025",
    summary:
      "Created a digital twin model of the Aalto Digital Twin Lab to support system visualisation, experimentation, and lab automation workflows.",
    stack: "Digital twins · Simulation · Unity · WebGL · Lab automation",
    link: "https://saadahmedrana.github.io/DTLABWebGL/",
    image: "DTL",
    imageSrc: "/images/DTlab.png",
    imageAlt: "Digital Twin Lab WebGL model",
    imageFit: "cover",
  },
  {
    title: "Autonomous Fixed-Wing UAV for Smart Agriculture",
    subtitle: "Bronze award-winning UAV prototype at Teknofest",
    type: "International Competition Project",
    year: "2022",
    summary:
      "Designed and built an autonomous fixed-wing UAV for Teknofest, winning the bronze award for originality in the fixed-wing category. The aircraft used a tapered high-wing configuration, monocoque fuselage, inverted-T empennage, Pixhawk-based autonomous flight control, and a Raspberry Pi/OpenCV vision pipeline for target detection and payload-drop mission logic.",
    stack:
      "Fixed-wing UAV · Pixhawk · Raspberry Pi · OpenCV · SolidWorks · CFD · Control surfaces",
    link: "https://drive.google.com/drive/folders/1VZXFBoCv0CTOtGqNg7xz5MxMSMxJoqE4?usp=drive_link",
    image: "UAV",
    imageSrc: "/images/teknofest.jpeg",
    imageAlt: "Autonomous fixed-wing UAV prototype developed for Teknofest",
    imageFit: "contain",
  },
];

  const personalProjects = [
    {
      title: "Autonomous Fixed-Wing UAV",
      type: "Competition project",
      summary:
        "Bronze award-winning fixed-wing UAV prototype for Teknofest, designed for autonomous mission flight, target detection, and payload-drop operation.",
      stack:
        "Fixed-wing UAV · Pixhawk · Raspberry Pi · OpenCV · SolidWorks · Control systems",
      link: "https://drive.google.com/drive/folders/1VZXFBoCv0CTOtGqNg7xz5MxMSMxJoqE4?usp=drive_link",
    },
    {
      title: "Voice Activated Robot",
      type: "ROS2 robotics",
      summary:
        "Voice-controlled robot using ROS2 and Alexa Skills Kit to make robot navigation more accessible and intuitive.",
      stack: "ROS2 · Alexa Skills Kit · Robotics",
      link: "https://www.linkedin.com/posts/saadahmedrana_ros2-aws-alexaskillskit-activity-7215795566906122241-edSQ?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Anti-Sway Controller for Overhead Crane",
      type: "Control systems",
      summary:
        "Designed and modelled an anti-sway overhead crane control system with LQR control, numerical modelling, and sensor integration.",
      stack: "MATLAB · Simulink · Creo · Control systems",
      link: "https://www.linkedin.com/posts/saadahmedrana_i-have-just-finalized-my-project-on-the-anti-sway-activity-7274090958693019648-xHCa?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Para Thrust",
      type: "Aerospace analysis tool",
      summary:
        "MATLAB application for parametric and performance analysis of a turbojet engine, developed using NASA Systems Engineering Handbook guidance.",
      stack: "MATLAB · Systems engineering · Turbojet analysis",
      link: "https://drive.google.com/drive/folders/1hZ8tWqEDbD2QUUOj0CAZp9JsIepPHJ6K?usp=drive_link",
    },
    {
      title: "Path Planning in ROS2",
      type: "Robot motion planning",
      summary:
        "Trajectory planning project for a robot URDF model using MoveIt in ROS2, with Cartesian visualisation and quaternion-based simulation.",
      stack: "ROS2 · MoveIt · URDF · Motion planning",
      link: "https://drive.google.com/drive/folders/1slVHcb_GYZP8J9f-uVvBsdKfZLr8xg6w",
    },
    {
      title: "Inventory Management System",
      type: "Web application",
      summary:
        "Pantry Tracker, a React and Firebase inventory app for adding, tracking, and updating pantry items through a simple interface.",
      stack: "React · Firebase · Vercel",
      link: "https://www.linkedin.com/posts/saadahmedrana_headstarterai-inventorymanagement-pantrytracker-activity-7225850567825231872-u4kJ?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Confide",
      type: "Chatbot project",
      summary:
        "Supportive chatbot prototype that simulates a friend-like conversation experience through a lightweight web interface.",
      stack: "Python · JavaScript · HTML · CSS",
      link: "https://www.linkedin.com/posts/saadahmedrana_python-javascript-css-activity-7228653184397844481-4zaX?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Computer Vision Hand Tracking",
      type: "Vision system",
      summary:
        "Hand detection and finger-counting module for live video streams, with plans to extend toward sign-language gesture recognition.",
      stack: "Python · OpenCV · Computer vision",
      link: "https://drive.google.com/drive/folders/1MkFPLrYuMmITa5wryXUymGWyD_lU5MKk?usp=drive_link",
    },
  ];

  const experience = [
    {
      role: "Research Assistant",
      place: "Aalto University · Digital Twin Lab",
      date: "Jan 2025 — Present",
      points: [
        "Researching LLM-assisted engineering workflows for maritime regulations, ontology-aligned data models, and requirements-to-logic translation.",
        "Developed an LLM-based pipeline for ship design validation from natural-language regulations with Rauma Marine Construction as collaborative partner.",
        "Contributed to development and testing work around autonomous operation of the Ilmatar overhead crane using Raspberry Pi, Python, OPC UA, and remote-control architecture.",
        "Created a digital twin model of the Digital Twin Lab to support visualisation, simulation, and lab automation workflows.",
        "Developed a RAG-based chatbot for querying marine-industry engineering documentation and answering technical questions.",
      ],
    },
    {
      role: "Project Engineer",
      place: "Aalto Design Factory · Assigned to Konecranes",
      date: "Sep 2024 — Jun 2025",
      points: [
        "Designed and developed a working prototype for a self-installing overhead crane concept for a more sustainable future.",
        "Used a scissor-lift mechanism and the crane’s own motor to support the installation concept.",
        "Developed the system animation and conducted FEA analysis to verify a safety factor of 2.8.",
      ],
    },
    {
      role: "Management Trainee",
      place: "Fauji Fertilizer Company Ltd.",
      date: "Aug 2023 — Aug 2025",
      points: [
        "Researched ARIM, root-cause analysis, and fishbone analysis to mitigate recurring problems across rotating and static equipment in the fertilizer industry.",
        "Designed preventive and predictive maintenance plans for on-site equipment and machinery.",
        "Conducted safety analysis for rigging equipment and sealing clamps before fabrication.",
        "Organised technical staff workshops and maintained inventory planning for future maintenance jobs.",
      ],
    },
  ];

  const skills = [
    "Mechatronics",
    "LLMs",
    "AI for engineering",
    "Requirements-to-logic",
    "Ontology alignment",
    "Maritime engineering",
    "Digital twins",
    "Autonomous mobility",
    "Robotics",
    "Control systems",
    "Python",
    "ROS2",
    "OPC UA",
    "Raspberry Pi",
    "Arduino",
    "MATLAB",
    "Simulink",
    "Simscape",
    "SHACL",
    "RDF",
    "JSON-LD",
    "RAG",
    "SolidWorks",
    "Creo",
    "Fusion 360",
    "Siemens NX",
    "Unity",
    "C / C++ / C#",
    "React",
    "Node.js",
    "PLC systems",
    "FEA",
    "Maintenance analysis",
    "Root-cause analysis",
  ];

  const publications = [
    {
      title:
        "AnchorMap: A Multi-Agent Pipeline for Variable Standardisation in Maritime Engineering",
      venue: "ECMS 2026",
      status: "Published",
      link: "https://www.icloud.com/iclouddrive/009gotgZBpDEThn0jEVz921-A#ecms2026proceed_complete",
      detail:
        "Schema-driven variable standardisation for maritime engineering using embeddings, LLM reasoning, and confidence-based routing.",
    },
    {
      title: "Authenticating Gate for Safe Robot Entry into Restricted Access Areas",
      venue: "10th Baltic Mechatronics Symposium · Tallinn",
      status: "Published in proceedings",
      link: "https://aaltodoc.aalto.fi/server/api/core/bitstreams/e14c91de-446e-4e4b-ab7f-f3dfa898fa3e/content",
      detail:
        "Presented at the 10th Baltic Mechatronics Symposium in Tallinn and published in the symposium proceedings. The work presents an automated gate proof of concept for AMR access control using RFID authentication, ToF safety monitoring, and Arduino-based control.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111] selection:bg-black selection:text-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[320px_1fr]">
        <aside className="border-b border-black/10 px-7 py-7 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
          <div className="flex h-full flex-col justify-between gap-12">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center border border-black text-sm font-black tracking-tighter">
                  SR
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em]">
                    Saad Ahmed Rana
                  </p>
                  <p className="text-sm text-black/55">Mechatronics Engineer</p>
                </div>
              </div>

              <nav className="hidden space-y-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/45 lg:block">
                <a className="block text-black transition hover:translate-x-1" href="#home">
                  Home
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#work">
                  Work
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#experience">
                  Experience
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#education">
                  Education
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#publications">
                  Publications
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#projects">
                  Projects
                </a>
                <a className="block transition hover:translate-x-1 hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </div>

            <div className="hidden lg:block">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-black/40">
                Espoo · Aalto University
              </p>
              <p className="max-w-[245px] text-sm leading-6 text-black/60">
                Mechatronics engineer working with LLMs for regulations, autonomous
                mobility, requirements-to-logic, marine engineering, and digital twins.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <a className="border-b border-black" href="https://github.com/saadahmedrana" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="border-b border-black" href="https://www.linkedin.com/in/saadahmedrana" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="border-b border-black" href="mailto:saad.rana@aalto.fi">
                  Email
                </a>
              </div>
            </div>
          </div>
        </aside>

        <section className="px-6 py-8 sm:px-10 lg:px-14 lg:py-10">
          <header className="mb-20 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/45 lg:hidden">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </header>

          <section id="home" className="grid min-h-[78vh] place-items-center border-b border-black/10 py-16">
            <div className="w-full">
              <p className="mb-6 max-w-5xl text-sm font-bold uppercase tracking-[0.23em] text-black/45">
                Mechatronics engineer · LLMs · Autonomous mobility ·
                Requirements-to-logic · Digital twins
              </p>
              <h1 className={`max-w-6xl text-[clamp(3rem,8vw,7.6rem)] ${displayClass}`}>
                Building smarter ways to design, validate, and control machines.
              </h1>
              <div className="mt-10 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                <p className="max-w-4xl text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                  I’m Saad Ahmed Rana, a mechatronics engineer at Aalto University.
                  My work connects mechanical systems, autonomous machines, and
                  LLM-based tools to make engineering decisions clearer, safer, and
                  easier to validate.
                </p>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <a href="#work" className="rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1">
                    View Work
                  </a>
                  <a href="#publications" className="rounded-full border border-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:-translate-y-1 hover:bg-black hover:text-white">
                    Publications
                  </a>
                  <a href="mailto:saad.rana@aalto.fi" className="rounded-full border border-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:-translate-y-1 hover:bg-black hover:text-white">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="border-b border-black/10 py-20">
            <SectionHeader
              eyebrow="Highlights"
              title="Recent ventures."
              headingClass={headingClass}
              description="Work across LLM-assisted engineering, maritime regulations, robot safety, autonomous systems, and digital twins."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {selectedWork.map((project, index) => (
                <a
                  href={project.link}
                  key={project.title}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  className={`group flex min-h-[390px] flex-col overflow-hidden border border-black/15 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[12px_12px_0_#111] ${
                    index === 0 ? "md:min-h-[500px]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                      {project.type}
                    </p>
                    <p className="text-sm font-bold text-black/45">{project.year}</p>
                  </div>

                  {project.imageSrc ? (
                    <div className="mt-14 overflow-hidden border border-black/10 bg-[#f3f1eb] p-3">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt || project.title}
                        className={`w-full grayscale transition duration-300 group-hover:grayscale-0 ${
                          project.imageFit === "contain"
                            ? "h-auto max-h-[320px] object-contain"
                            : "h-56 object-cover"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="mt-14 h-56 border border-black/10 bg-[linear-gradient(135deg,#111_0%,#111_8%,transparent_8%,transparent_100%)] grayscale transition duration-300 group-hover:grayscale-0">
                      <div className="flex h-full items-end justify-between p-5">
                        <div className="grid h-12 w-20 place-items-center border border-black bg-[#f7f5f0] text-[10px] font-black uppercase tracking-[0.08em]">
                          {project.image}
                        </div>
                        <div className="h-20 w-36 border border-black/30 bg-[#f7f5f0]" />
                      </div>
                    </div>
                  )}

                  <h3 className={`mt-8 break-words text-3xl ${headingClass}`}>
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/45">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-black/62">
                    {project.summary}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                    <p className="min-w-0 text-sm font-semibold leading-6 text-black/50">
                      {project.stack}
                    </p>
                    <span className="shrink-0 text-2xl transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <SectionAbout headingClass={headingClass} />
          <SectionExperience headingClass={headingClass} experience={experience} />
          <SectionEducation headingClass={headingClass} />
          <SectionPublications headingClass={headingClass} publications={publications} />
          <SectionSkills headingClass={headingClass} skills={skills} />
          <SectionProjects headingClass={headingClass} personalProjects={personalProjects} />
          <SectionLanguages headingClass={headingClass} />

          <footer id="contact" className="pt-20 pb-20">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/45">
              Contact
            </p>

            <h2 className={`mt-3 max-w-5xl text-[clamp(2.6rem,5.4vw,5.6rem)] ${displayClass}`}>
              Let’s build intelligent physical systems.
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white"
                href="mailto:saad.rana@aalto.fi"
              >
                saad.rana@aalto.fi
              </a>

              <a
                className="rounded-full border border-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
                href="https://www.linkedin.com/in/saadahmedrana"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="rounded-full border border-black px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
                href="https://github.com/saadahmedrana"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-black/45">
              Espoo, Finland · Aalto University · saadahmedrana.github.io · +358 41 740 8531
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ eyebrow, title, description, headingClass }) {
  return (
    <div className="mb-12 max-w-5xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/45">
        {eyebrow}
      </p>

      <h2 className={`mt-3 max-w-4xl text-4xl sm:text-6xl ${headingClass}`}>
        {title}
      </h2>

      {description && (
        <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl sm:leading-9">
          {description}
        </p>
      )}
    </div>
  );
}

function SectionAbout({ headingClass }) {
  return (
    <section id="about" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="About"
        title="Mechatronics engineer with systems thinking."
        headingClass={headingClass}
        description="I work at the intersection of mechanical engineering, robotics, software, and industrial automation. My current work at Aalto University's Digital Twin Lab focuses on translating engineering knowledge into usable digital systems: LLM workflows, ontology-aligned data, autonomous mobility, and machine-readable validation."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "LLMs for regulations",
          "Requirements to logic",
          "Autonomous mobility",
          "Marine engineering",
          "Digital twins",
          "Mechanical design",
        ].map((skill) => (
          <div
            key={skill}
            className="min-w-0 break-words border border-black/10 bg-white px-5 py-5 text-xs font-bold uppercase leading-7 tracking-[0.08em] text-black/65 [overflow-wrap:anywhere] sm:text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionExperience({ headingClass, experience }) {
  return (
    <section id="experience" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Professional Experience"
        title="Work history."
        headingClass={headingClass}
        description="Research and industry experience across Aalto University, Aalto Design Factory, Konecranes-linked concept development, and industrial maintenance engineering."
      />

      <div className="space-y-5">
        {experience.map((job) => (
          <article
            key={job.role}
            className="overflow-hidden border border-black/10 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-start">
              <div>
                <h3 className={`text-2xl ${headingClass}`}>{job.role}</h3>
                <p className="mt-1 text-base font-semibold text-black/55">
                  {job.place}
                </p>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                {job.date}
              </p>
            </div>
            <ul className="mt-6 space-y-4">
              {job.points.map((point) => (
                <li key={point} className="flex gap-4 text-lg leading-8 text-black/68">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-black" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionEducation({ headingClass }) {
  return (
    <section id="education" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation."
        headingClass={headingClass}
        description="Formal training in mechanical engineering and mechatronics, strengthened by research work in digital twins, LLM-based engineering workflows, and autonomous systems."
      />

      <div className="space-y-5">
        <article className="overflow-hidden border border-black/10 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-start">
            <div>
              <h3 className={`text-2xl sm:text-3xl ${headingClass}`}>
                Master’s in Mechanical Engineering · Mechatronics
              </h3>
              <p className="mt-1 text-base font-semibold text-black/55">
                Aalto University · Digital Twin Lab
              </p>
            </div>
            <p className="shrink-0 text-sm font-bold uppercase tracking-[0.16em] text-black/45">
              2024 — June 2026
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            {[
              "GPA: 4.76 / 5.0. Recipient of the Finland Scholarship and Aalto Scholarship.",
              "Master’s thesis on translating natural-language maritime regulations into machine-readable rules using LLMs.",
              "Expected graduation: June 2026.",
            ].map((point) => (
              <li key={point} className="flex gap-4 text-lg leading-8 text-black/68">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="overflow-hidden border border-black/10 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-start">
            <div>
              <h3 className={`text-2xl sm:text-3xl ${headingClass}`}>
                Bachelor’s in Mechanical Engineering
              </h3>
              <p className="mt-1 text-base font-semibold text-black/55">
                Pakistan Institute of Engineering & Applied Sciences
              </p>
            </div>
            <p className="shrink-0 text-sm font-bold uppercase tracking-[0.16em] text-black/45">
              2019 — 2023
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-4 text-lg leading-8 text-black/68">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-black" />
              <span>GPA: 3.77 / 4.0.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function SectionPublications({ headingClass, publications }) {
  return (
    <section id="publications" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Publications"
        title="Published research."
        headingClass={headingClass}
        description="Papers focused on maritime engineering standardisation, LLM-assisted workflows, and safe autonomous mobility in industrial environments."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {publications.map((publication) => (
          <a
            key={publication.title}
            href={publication.link}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[300px] flex-col overflow-hidden border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-black hover:shadow-[8px_8px_0_#111]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              {publication.status}
            </p>
            <h3 className={`mt-5 break-words text-2xl ${headingClass}`}>
              {publication.title}
            </h3>
            <p className="mt-4 text-lg font-semibold text-black/55">
              {publication.venue}
            </p>
            <p className="mt-5 text-base leading-7 text-black/62">
              {publication.detail}
            </p>
            <div className="mt-auto pt-8 text-2xl transition group-hover:translate-x-1">
              →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionSkills({ headingClass, skills }) {
  return (
    <section id="skills" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Technical Skills"
        title="Tools I use."
        headingClass={headingClass}
        description="A mix of mechanical engineering, robotics, simulation, controls, programming, maritime data, LLM systems, and product-building tools."
      />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="min-w-0 break-words border border-black/10 bg-white px-4 py-3 text-xs font-bold uppercase leading-6 tracking-[0.08em] text-black/65 [overflow-wrap:anywhere] sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionProjects({ headingClass, personalProjects }) {
  return (
    <section id="projects" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Personal Projects"
        title="Projects."
        headingClass={headingClass}
        description="Robotics, controls, simulation, web development, and computer-vision work."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {personalProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[300px] flex-col overflow-hidden border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-black hover:shadow-[8px_8px_0_#111]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">
              {project.type}
            </p>
            <h3 className={`mt-6 break-words text-2xl ${headingClass}`}>
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-black/62">
              {project.summary}
            </p>
            <div className="mt-auto flex items-end justify-between gap-4 pt-8">
              <p className="min-w-0 text-sm font-semibold leading-6 text-black/50">
                {project.stack}
              </p>
              <span className="shrink-0 text-2xl transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionLanguages({ headingClass }) {
  return (
    <section id="languages" className="border-b border-black/10 py-20">
      <SectionHeader
        eyebrow="Languages"
        title="Communication."
        headingClass={headingClass}
        description="Comfortable communicating technical work in English, with ongoing Finnish studies supporting daily and professional life in Finland."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { language: "English", level: "Proficient" },
          { language: "Finnish", level: "11 credits completed · still learning" },
          { language: "Urdu", level: "Native" },
        ].map((item) => (
          <article
            key={item.language}
            className="min-h-[180px] border border-black/10 bg-white p-6"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              {item.language}
            </p>
            <p className="mt-6 text-2xl font-black leading-[1.05] tracking-[-0.03em] text-black/80">
              {item.level}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}