import "./ProjectsStyle.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

function ProjectsList() {
  const [hoverProjectId, setHoverProjectId] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const projects = [
    {
      id: 5,
      name: "Lazy Cat",
      description: (
        <>
          Lazy Cat is a <strong>Python</strong> desktop application built with{" "}
          <strong>Tkinter</strong> and powered by the{" "}
          <strong>Cohere API</strong>. It's designed to help job seekers
          organize and streamline their application process. Users can input raw
          job postings, which are then automatically formatted into a clean,
          reference-friendly layout using an AI-generated prompt via Cohere.
          <br />
          <br />
          The app maintains a running list of jobs you've applied for, making it
          easy to stay on top of deadlines and follow-ups. A built-in AI chatbox
          allows you to interact directly with Cohere for career-related
          assistance or clarification. One standout feature is the ability to
          click on keywords within job descriptions to instantly fetch
          definitions or explanations using Cohere’s language model — helping
          you quickly understand industry jargon or unfamiliar terms.
          <br />
          <br />
          Lazy Cat combines useful automation with a clean, intuitive interface,
          making it a practical tool for anyone actively navigating the job
          market.
        </>
      ),
      image: "/Assets/lazyCatPhoto.PNG",
      icon: <GitHubIcon />,
      link: "https://github.com/stevien90/Lazy-Cat",
    },
    {
      id: 4,
      name: "Kurappusu — Craps Roll Tracker & Probability Visualizer",
      description: (
        <>
          <>
            Kurappusu is a full-stack web app built with <strong>React</strong>{" "}
            and <strong>Python FastAPI</strong> that helps craps players easily
            record their rolls and visualize real-time empirical probabilities
            through interactive graphs. It tracks roll history, special bet
            occurrences like hardways and horn bets, and highlights hot and cold
            numbers to inform gameplay. With secure user registration and login,
            all data is safely stored in CSV files for review and export,
            combining useful statistics with a user-friendly experience.
          </>
        </>
      ),
      image: "/Assets/kurapusuPhoto.PNG",
      icon: <ArrowOutwardIcon />,
      link: "https://kurappusu.vercel.app/",
    },
    {
      id: 3,
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
      id: 1,
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
      icon: <ArrowOutwardIcon />,
      link: "https://stevien90.github.io/ZENBOWL/",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "50px", flexDirection: "column" }}>
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
                  hoverProjectId === project.id
                    ? project.gif ?? project.image
                    : project.image
                }
                alt={project.name}
                onClick={(e) => {
                  e.stopPropagation(); // prevents bubbling to <a>
                  e.preventDefault(); // prevents navigation
                  handleImageClick(project.gif ?? project.image);
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  display: "block",
                  cursor: "zoom-in",
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

      {/* Modal for Enlarged Image */}
      {enlargedImage && (
        <div
          onClick={closeEnlargedImage}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
