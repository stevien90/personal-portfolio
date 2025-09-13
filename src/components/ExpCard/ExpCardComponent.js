import { Box, Button } from "@mui/material";
import "./ExpCard.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function ExpCard() {
  const experienceList = [
    {
      id: 1,
      year: "2025",
      title: "Website Developer",
      company: "White Fox Marketing Lab",
      description:
        "As a consultant for White Fox Marketing Lab—a marketing company focused on helping businesses grow—I worked closely with the web designer and the internal team to translate intricate design requirements into functional websites, resolving errors and optimizing performance to ensure smooth, reliable user experiences.",
      program: ["PHP", "WordPress", "Webflow", "Elementor"],
      link: "https://whitefoxmarketinglab.com/",
    },
    {
      id: 2,
      year: "2022 - 2024",
      title: "Front-End Workflow Developer (Contracted via Infosys)",
      company: "AT&T (assigned to DIRECTV)",
      description:
        "Employed by Infosys and contracted to AT&T for DIRECTV, I developed and maintained front-end web workflows using Nokia Workflow — a proprietary tool leveraging HTML, CSS, and JavaScript — to manage content across DIRECTV’s customer-facing platforms. I was the lead developer on a Business Process Management (BPM) flow designed to proactively address a most common error code displayed on users’ TV screens. This automated system triggered on-screen repair service offers based on that error, processed real-time accept/deny responses, and intelligently re-surfaced offers after a 6-month cooldown if the error reoccurred. I also led a small team during the implementation, coordinating development, logic design, and deployment, ensuring seamless integration with existing support workflows.",
      program: ["HTML5", "Nokia Workflow", "JavaScript", "CSS"],
      link: "https://www.directv.com/support",
    },
    {
      id: 3,
      year: "5 months - 2022",
      title: "Java And Angular Full Stack Trainee",
      company: "Revature",
      description:
        "I participated in Revature’s immersive full-time training program focused on Java full-stack development. During this time, I gained hands-on experience with Java, Spring Boot, Spring MVC, Hibernate/JPA, MySQL, and Angular. The program emphasized real-world application development, Agile methodologies, test-driven development using JUnit and Mockito, and best practices in version control with Git. I collaborated in a team environment to build and deploy enterprise-grade web applications, reinforcing principles of clean code, software architecture, and RESTful API design.",
      program: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Hibernate / JPA",
        "MySQL",
        "JUnit/ Mockito",
        "Maven/ Gradle",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Bootstrap",
      ],
      link: "https://www.revature.com/",
    },
  ];

  return (
    <Box className="container">
      {experienceList.map((exp) => (
        <a
          key={exp.id}
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-link-wrapper"
        >
          <Box className="experience">
            <Box className="left">
              <p>{exp.year}</p>
            </Box>
            <Box className="right">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h1>{exp.company}</h1>
                <span className="exp-icon">
                  <ArrowOutwardIcon />
                </span>
              </Box>
              <h2>{exp.title}</h2>
              <p>{exp.description}</p>
              <Box className="label">
                {exp.program.map((prog, index) => (
                  <Button key={index} className="buttonLabel">
                    {prog}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </a>
      ))}
    </Box>
  );
}

export default ExpCard;
