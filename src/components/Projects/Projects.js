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
import Confide from "../../Assets/Projects/Confide.png";
import Crane from "../../Assets/Projects/Crane.png";

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
              description="This project features a voice-controlled robot that uses ROS2 and the Alexa Skills Kit (ASK) SDK. The project aims at domesticating robots by making them easier to navigate and control to make their control accessible and easier for everyone"
              ghLink="https://www.linkedin.com/posts/saadahmedrana_ros2-aws-alexaskillskit-activity-7215795566906122241-edSQ?utm_source=share&utm_medium=member_desktop"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crane}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Anti Sway Controller for Overhead Crane"
              description="This project focused on designing an anti-sway control system for an overhead crane. I developed a numerical model and implemented an LQR controller for precise control. Key components, including asynchronous motors, a double girder electric wire rope hoist, and a soft sensor for angle measurement, were integrated into the system."
              ghLink="https://www.linkedin.com/posts/saadahmedrana_i-have-just-finalized-my-project-on-the-anti-sway-activity-7274090958693019648-xHCa?utm_source=share&utm_medium=member_desktop"
              demoLink="https://www.linkedin.com/posts/saadahmedrana_headstarterai-inventorymanagement-pantrytracker-activity-7225850567825231872-u4kJ?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Pantry}
             alt="Saad Ahmed Rana"
             isBlog={false}
             title="Inventory Management System"
             description="Pantry Tracker is an intuitive inventory management system built with ReactJS and deployed on Vercel. This app leverages Firebase for backend data storage, enabling users to effortlessly add, track, and adjust pantry items."
             ghLink="https://www.linkedin.com/posts/saadahmedrana_headstarterai-inventorymanagement-pantrytracker-activity-7225850567825231872-u4kJ?utm_source=share&utm_medium=member_desktop"
             demoLink="https://www.linkedin.com/posts/saadahmedrana_headstarterai-inventorymanagement-pantrytracker-activity-7225850567825231872-u4kJ?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Confide}
              alt="Saad Ahmed Rana"
              isBlog={false}
              title="Confide"
              description="Confide is a chatbot that simulates a friend, providing support during both good and challenging times. Built with Python and the `cleverbotfreeapi`, it features a user-friendly interface using HTML, CSS, and JavaScript."
              ghLink="https://www.linkedin.com/posts/saadahmedrana_python-javascript-css-activity-7228653184397844481-4zaX?utm_source=share&utm_medium=member_desktop"
              // demoLink="https://example.com"
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
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
