import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moveIT from "../../Assets/Projects/moveIT.png";
import Pantry from "../../Assets/Projects/Pantry.png";
import MATLAB from "../../Assets/Projects/MATLAB.png";
import UAV from "../../Assets/Projects/UAV.jpg";
import ROS22 from "../../Assets/Projects/ROS22.png";
import openCV from "../../Assets/Projects/openCV.png";
import Confide from "../../Assets/Projects/Confide.png"; // Add the import for the new image

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
              imgPath={UAV}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Autnomous UAV"
              description="International Bronze and TL 15,000 winning fully autonomous Unmanned Aerial Vehicle (UAV) for smart agriculture. The UAV prototype was rigorously tested in the international competition TeknoFest 22', the finals of which were held in Turkey."
              ghLink="https://drive.google.com/drive/folders/1VZXFBoCv0CTOtGqNg7xz5MxMSMxJoqE4?usp=drive_link"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={ROS22}
             alt="Saad Ahmed Rana"
             isBlog={false}
             title="Voice activated Robot"
             description="This project features a voice-controlled robot that uses ROS2 and the Alexa Skills Kit (ASK) SDK. The project aims at domesticating robots by making them easier to navigate and control. "
             ghLink="https://drive.google.com/drive/folders/1slVHcb_GYZP8J9f-uVvBsdKfZLr8xg6w?usp=drive_link"   
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Pantry}
             alt="Saad Ahmed Rana"
             isBlog={false}
             title="Inventory Management System"
             description="Pantry Tracker is an intuitive inventory management system built with ReactJS and deployed on Vercel. This app leverages Firebase for backend data storage, enabling users to effortlessly add, track, and adjust pantry items."
             ghLink="https://pantry-tracker-saad-c2lurmru2-saad-ahmed-ranas-projects.vercel.app"
             demoLink="https://pantry-tracker-saad-c2lurmru2-saad-ahmed-ranas-projects.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MATLAB}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Para thrust"
              description="This application, developed in the MATLAB environment, performs a parametric and performance analysis of a turbo-jet engine. The project was funded by the government of Pakistan and completed according to the guidelines of the NASA Systems Engineering Handbook. "
              ghLink="https://drive.google.com/drive/folders/1hZ8tWqEDbD2QUUOj0CAZp9JsIepPHJ6K?usp=drive_link"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moveIT}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Path planning in ROS2"
              description="This project plans the trajectory of a robot URDF model for domestic robot as it picks up objects and places them in a pre-decided place. moveIT is used in ROS2 to visualize in cartesian coordinates and then the code runs the simulation in quaternion coordinates in the background. "
              ghLink="https://drive.google.com/drive/folders/1slVHcb_GYZP8J9f-uVvBsdKfZLr8xg6w"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={openCV}
                alt="Saad Ahmed Rana"
                isBlog={false}
                title="Computer Vision"
                description="This is a hand detection and tracking module that counts the number of fingers open for any number of hands on the stream. The project is being extended to detect sign language gestures for making a sign-to-speech model."
                ghLink="https://drive.google.com/drive/folders/1MkFPLrYuMmITa5wryXUymGWyD_lU5MKk?usp=drive_link"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Confide} // Add the image for the new project
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Confide"
              description="Confide is a chatbot that simulates a friend, providing support during both good and challenging times. Built with Python and the `cleverbotfreeapi`, it features a user-friendly interface using HTML, CSS, and JavaScript."
              ghLink="https://github.com/saadahmedrana/confide" // Add the GitHub link
              // demoLink="https://example.com" // Add a demo link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
