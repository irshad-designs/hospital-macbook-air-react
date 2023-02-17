import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import SideNavbar from "./components/SideNavbar";
import Profile from "./components/Profile";
import Details from "./components/Details";

import "./App.css";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <SideNavbar />
        </Col>
        <Col md={3}>
          <Profile />
        </Col>
        <Col md={6}>
          <Details />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
