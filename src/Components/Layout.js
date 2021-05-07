import React from "react";
import { SignIn } from "./SignIn";
import { LogIn } from "./LogIn";

import { Col, Container, Row } from "react-bootstrap";

export const Layout = () => {
  return (
    <Container className="lay">
      <Row>
        <Col xs className="ins">
          <h2>Inscription</h2>
          <SignIn />
        </Col>
        <Col xs className="log">
          <h2>Login</h2>
          <LogIn />
        </Col>
      </Row>
    </Container>
  );
};
