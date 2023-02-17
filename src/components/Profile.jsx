import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

import profile from "./../assets/profile.png";
import FilesAndDoc from "./FilesAndDoc";

const Profile = () => {
  return (
    <div>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          width: "13rem",
          marginTop: "5rem",
          border: "none",
        }}
      >
        <Card.Img
          style={{
            width: "92px",
            height: "92px",
          }}
          variant="top"
          src={profile}
          alt="profile"
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "24px",
            }}
          >
            Diane Cooper
          </Card.Title>
          <Card.Text>diane.cooper@example.com</Card.Text>
        </Card.Body>
        <ListGroup className="card-desk flex-row" style={{ border: "none" }}>
          <ListGroup.Item>
            <h2>15</h2>
            <label> last time </label>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>02</h2>
            <label>Upcoming</label>
          </ListGroup.Item>
        </ListGroup>
        <Button
          variant="outline-dark"
          size="lg"
          style={{ marginTop: "20px", padding: "5px 35px" }}
        >
          Send Message
        </Button>{" "}
      </Card>
      <FilesAndDoc />
    </div>
  );
};

export default Profile;
