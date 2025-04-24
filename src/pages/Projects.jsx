import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import php from "../assets/projects/php.png";
import cipher from "../assets/projects/cipher.png";
import dsa from "../assets/projects/dsa.png";
import cloud from "../assets/projects/cloud.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Ecomm-Ease"
              description="ecomm-ease is a user-friendly e-commerce platform built with PHP and Express. It allows customers to browse products, add them to their cart, and securely checkout. The platform features user registration, order tracking, and secure payment integration. Admins can manage product listings and orders through an intuitive admin panel. With MongoDB for efficient database management, ecomm-ease ensures a smooth and reliable shopping experience."
              ghLink="https://github.com/chaudharytanuja12219564/Grocery-Delivery-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Night-Owl"
              description="This is a responsive grocery delivery platform built using HTML, CSS, JavaScript, and Express.js. It allows users to browse a wide range of grocery items, manage their carts, and place orders with ease. Customers can sign up, log in, and track their orders in real-time. The admin panel enables efficient product and order management. MongoDB is used for fast and reliable data storage, ensuring smooth operations and user experience."
              ghLink="https://github.com/chaudharytanuja12219564/Grocery-Delivery-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Calculator"
              description="A simple and responsive Calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations and features a clean user interface for quick and easy calculations."
              ghLink="https://github.com/chaudharytanuja12219564/calculator"
              demoLink="https://chaudharytanuja12219564.github.io/calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="TodoList"
              description="A dynamic Todo List application built with React.js, allowing users to add, edit, delete, and mark tasks as complete. It features a responsive UI and real-time task updates, offering an efficient way to manage daily to-dos."
              ghLink="https://github.com/chaudharytanuja12219564/React-TodoList"
            />
          </Col>
          <h1 className="project-heading">
          <strong className="yellow"> Certificates  </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my learnings.
        </p>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Computing"
              description="The NPTEL Cloud Computing certificate course provided an in-depth understanding of cloud architecture, service models (IaaS, PaaS, SaaS), and deployment strategies. It also covered virtualization, scalability, and security aspects, preparing learners for real-world cloud environments."
              ghLink="https://archive.nptel.ac.in/noc/B2C/candidate_login/main.php"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title="Data Structures and Algorithms"
              description="The Data Structures and Algorithms course from Udemy focused on core concepts like arrays, linked lists, trees, sorting, and searching algorithms, enhancing problem-solving and coding efficiency."
              ghLink="https://www.udemy.com/certificate/UC-5df428a6-cf63-47fe-a72e-8a3fe005f6a2/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cipher}
              isBlog={false}
              title="MERN Stack"
              description="This course covered full-stack development using MongoDB, Express.js, React, and Node.js. It emphasized building dynamic web applications and mastering the integration of frontend and backend technologies."
              ghLink="hhttps://www.cipherschools.com/certificate/preview?id=66aa6cb6777cd431c3cc527ft"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={php}
              isBlog={false}
              title="Learning PHP"
              description="This course offered a comprehensive introduction to PHP, covering syntax, form handling, sessions, and database integration. It helped build a solid foundation for backend web development."
              ghLink="https://www.coursera.org/account/accomplishments/verify/K7MDBBPF52S4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects