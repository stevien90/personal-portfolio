import "./styles.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import NavComponent from "./components/Nav/NavComponent";
import ExpCard from "./components/ExpCard/ExpCardComponent";
import ProjectsList from "./components/Projects/Projects";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

  // Scroll forwarding for sidebar
  useEffect(() => {
    const leftSide = document.querySelector(".leftSide");

    const handleWheel = (e) => {
      if (window.innerWidth > 1024 && scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
          top: e.deltaY,
          behavior: "auto",
        });
      }
    };

    if (leftSide) {
      leftSide.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (leftSide) {
        leftSide.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Intersection observer to highlight nav
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxRatio &&
            entry.intersectionRatio >= 0.4
          ) {
            mostVisibleEntry = entry;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (mostVisibleEntry) {
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setActiveSection(mostVisibleEntry.target.id);
          }, 200);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: [0.4, 0.6, 0.8],
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <Box className="scrollContainer" ref={scrollContainerRef}>
        <Box className="main">
          {/* Left Side Navigation */}
          <Box className="leftSide">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "10px",
              }}
            >
              <h1 className="name">Steven Nguyen</h1>
              <h2 className="title">Full Stack Developer</h2>
              <p>
                I develop end-to-end applications, covering frontend interfaces,
                backend APIs, and database systems.
              </p>
            </Box>

            <NavComponent
              text="About"
              active={activeSection === "about"}
              onClick={() => {
                aboutRef.current.scrollIntoView({ behavior: "smooth" });
                setActiveSection("about");
              }}
            />
            <NavComponent
              text="Experience"
              active={activeSection === "experience"}
              onClick={() => {
                experienceRef.current.scrollIntoView({ behavior: "smooth" });
                setActiveSection("experience");
              }}
            />
            <NavComponent
              text="Projects"
              active={activeSection === "projects"}
              onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
                setActiveSection("projects");
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <a
                href="/Assets/Resume2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <ArticleIcon />
                  <p>View My Resume</p>
                </Box>
              </a>

              {/* <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/Assets/hackerrank-svgrepo-com.svg"
                  className="HRicon"
                />
                <p> COMING SOON</p>
              </Box> */}
            </Box>

            <Box
              className="socialIconBox"
              style={{ display: "flex", gap: "10px" }}
            >
              <a
                href="https://github.com/stevien90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/steven-nguyen-6b94b5182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=stevenwin528496@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleIcon />
              </a>
            </Box>
          </Box>

          {/* Right Side Sections */}
          <Stack className="rightSide" spacing={2}>
            <Box
              id="about"
              ref={aboutRef}
              sx={{
                minHeight: "50vh",
                scrollMarginTop: "80px",
              }}
            >
              <h1>ABOUT ME</h1>
              <p className="about-me">
                I’m a full-stack JavaScript developer with a strong focus on
                building scalable web applications—from intuitive front-end
                interfaces to robust back-end services. While JavaScript is my
                core language, I also have hands-on experience with Python,
                Java, and PHP, allowing me to adapt to a variety of tech stacks
                based on project or team needs. I'm always learning and
                expanding my skill set.
                <br />
                <br />
                I’m currently enhancing my Python expertise through algorithmic
                problem solving on HackerRank (selected solutions will be shared
                here soon). In parallel, I’m developing an API-driven web
                application focused on data extraction and analysis. The project
                leverages Python and Plotly for interactive data visualization,
                with the goal of uncovering patterns, trends, and actionable
                insights.
                <br />
                <br />
                Outside of coding, I’m a lifelong gamer whose passion for games
                naturally evolved into a love for programming. I enjoy board
                game nights with friends, and I’m currently hooked on
                Hearthstone Battlegrounds. One of my favorite hobbies has always
                been playing flag football. Unfortunately, due to a knee issue,
                I’m no longer able to play—but the competitive spirit and team
                mindset I gained from it still carry through in my work and
                collaborations.
                <br />
                <br />
                At the core of everything I do, my goal is simple: to achieve
                self-happiness and then spread happiness to others through
                meaningful work, shared experiences, and continuous growth.
              </p>
            </Box>

            <Box
              id="experience"
              ref={experienceRef}
              sx={{
                minHeight: "50vh",
                scrollMarginTop: "80px",
              }}
            >
              <h1>EXPERIENCE</h1>
              <ExpCard />
            </Box>

            <Box
              id="projects"
              ref={projectsRef}
              sx={{
                minHeight: "50vh",
                scrollMarginTop: "80px",
              }}
            >
              <h1 style={{ marginBottom: "1.25rem" }}>PROJECTS</h1>
              <ProjectsList />
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
