import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import nfc from "../../Assets/Projects/NFC.png";
import request from "../../Assets/Projects/request.png";
import starbucks from "../../Assets/Projects/starbucks.png";
import netflix from "../../Assets/Projects/netflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix clone using Reactjs for the front-end user interface and Redux for state management. Google Firebase was used for the backend with authentication and database. Themoviedb.org API was used to fetch the movie data.
              "
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starbucks}
              isBlog={false}
              title="Starbucks Homepage clone"
              description="Starbucks homepage clone using HTML and CSS only.Implemented responsive design to ensure optimal viewing experience on different devices."
              ghLink="https://github.com/bhuwanaryal0202/starbucks_clone"
              demoLink="https://starbuck-clone-bhuwan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="Movie Check Website using HTML, CSS, and JavaScript.Integrated TheMovieDB API to provide a catalogue of movies and TV shows.Utilised CSS Grid and Flex box to create a modern and visually appealing layout."
              ghLink="https://github.com/bhuwanaryal0202/Movie_Check_app"
              demoLink="https://movie-check-app.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfc}
              isBlog={false}
              title="NFC Based Business Card"
              description="Created a NFC based business card website using HTML and Css and embeded in NFC tag. The NFC tag contains the user's contact information and can be scanned by any NFC enabled device."
              ghLink="https://github.com/bhuwanaryal0202/bhuwanaryal0202.github.io"
              demoLink="https://socialcard-bhuwan-aryal.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={request}
              isBlog={false}
              title="Request a Invite" 
              description="Created a Request a invite website using HTML and CSS. The website is fully responsive and can be viewed on any device."
              ghLink="https://github.com/bhuwanaryal0202/Broccoli-coAPP"
              demoLink="https://brocolli.netlify.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
