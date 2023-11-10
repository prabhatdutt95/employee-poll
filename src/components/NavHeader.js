import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    // <nav className="nav">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/leaderboard">Leaderboard</Link>
    //     </li>
    //     <li>
    //       <Link to="/new">New</Link>
    //     </li>
    //   </ul>
    // </nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>WYR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline" defaultActiveKey="/home">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link eventKey="/new">New</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
