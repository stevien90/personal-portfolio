import "./ProjectsStyle.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

function ProjectsList() {
  const [hoverProjectId, setHoverProjectId] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      name: "White Fox Marketing Lab",
      description: (
        <>
          White Fox Marketing Lab helps businesses grow through creative
          marketing solutions, including web design and hosting, social media
          management, SEO, PPC, photography and videography, and content
          marketing. Contributed to website development using{" "}
          <strong>WordPress</strong> and <strong>Elementor</strong> plugin, and
          addressed unexpected technical challenges while implementing more
          advanced and intricate design features.
        </>
      ),
      image: "/Assets/whitefoxImage.PNG",
      gif: "/Assets/wfGif.gif",
      icon: <ArrowOutwardIcon />,
      link: "https://whitefoxmarketinglab.com/",
    },
    {
      id: 2,
      name: "Sugoi",
      description: (
        <>
          Built a workout tracker web application that allows users to create
          custom routines and log workouts, including exercises, repetitions,
          weight, and rest time. The project leverages <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and a <strong>MySQL</strong> database, with
          a <strong>RESTful API</strong> architecture to manage and deliver
          dynamic data between the backend and the user interface
        </>
      ),
      image: "/Assets/sugoiImage.PNG",
      gif: "/Assets/suGif.gif",
      icon: <GitHubIcon />,
      link: "https://github.com/stevien90/Sugoi",
    },
    {
      id: 3,
      name: "ZenBowl",
      description: (
        <>
          Developed a subscription-based rice bowl landing page to practice
          modern front-end development using <strong>React</strong>,{" "}
          <strong>Bootstrap</strong>, and <strong>Material UI</strong>. The
          project focuses on responsive design, component-based architecture,
          and UI consistency across devices.
        </>
      ),
      image: "/Assets/zenbowlImage.PNG",
      gif: "/Assets/zenGif.gif",
      icon: <GitHubIcon />,
      link: "https://github.com/stevien90/ZENBOWL",
    },
  ];

  const hoveredProject = projects.find((p) => p.id === hoverProjectId);
  //const showGif = hoveredProject && screenWidth > 768;

  return (
    <div style={{ display: "flex", gap: "50px", flexDirection: "column" }}>
      {/* <div style={{ position: "relative" }}>
        {showGif && (
          <div
            style={{
              position: "fixed",
              top: mousePosition.y + -300,
              left: mousePosition.x + -500,
              width: "300px",
              height: "300px",
              zIndex: 999,
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <img
              src={hoveredProject.gif}
              alt="Project GIF"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "fill",
              }}
            />
          </div>
        )}
      </div> */}

      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="project-container"
            onMouseEnter={() => setHoverProjectId(project.id)}
            onMouseLeave={() => setHoverProjectId(null)}
            style={{
              display: "flex",
              gap: "20px",
              borderRadius: "10px",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "12.5rem",
                height: "12.5rem",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={
                  hoverProjectId === project.id ? project.gif : project.image
                }
                alt={project.name}
                // onMouseEnter={() => setHoverProjectId(project.id)}
                // onMouseLeave={() => setHoverProjectId(null)}
                // onMouseMove={(e) =>
                //   setMousePosition({ x: e.clientX, y: e.clientY })
                // }
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  display: "block",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <h1>{project.name}</h1>
                <span className="project-icon">{project.icon}</span>
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ProjectsList;
