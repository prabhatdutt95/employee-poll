import { useDispatch } from "react-redux";
import { removeUser } from "../actions/authedUser";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavHeader = ({ loggedUser }) => {
  const dropdownVariant = "Secondary";

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logout button clicked");
    dispatch(removeUser(loggedUser));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>WYR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline" defaultActiveKey="/">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link eventKey="/new">New</Nav.Link>
          </Nav>
          <Navbar.Text>
            <div className="d-flex justify-content-start align-items-center">
              <img
                className="me-3"
                src={loggedUser.avatarURL}
                style={{ width: 36 }}
                alt={loggedUser.id}
              />
              <DropdownButton
                key={dropdownVariant}
                id={`dropdown-split-variants-${dropdownVariant}`}
                variant={dropdownVariant.toLowerCase()}
                title={loggedUser.name}
              >
                <Dropdown.Item eventKey="1">
                  <div
                    className="d-flex justify-content-start align-items-center"
                    onClick={handleLogout}
                  >
                    <img
                      className="me-2"
                      src="/assets/images/logout.png"
                      alt="Logout"
                      style={{ width: 15 }}
                    />
                    <span>Logout</span>
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
