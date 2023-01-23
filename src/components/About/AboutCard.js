import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhuwan Aryal </span>
            from <span className="purple"> Melbourne, Australia.</span>
            <br />I am Front-end developer and a tech enthusiast.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Study to be accomplished, not affluent.Follow excellence, and success will chase after you"{" "}
          </p>
          <footer className="blockquote-footer">bhuwan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
