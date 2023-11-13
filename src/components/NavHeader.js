import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeUser } from "../actions/authedUser";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavHeader = ({ loggedUser }) => {
  const navObjList = [
    { name: "Home", url: "/" },
    { name: "Leaderboard", url: "/leaderboard" },
    { name: "New", url: "/new" },
  ];
  const dropdownVariant = "Secondary";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigation = (url) => {
    if (url === "/logout") {
      dispatch(removeUser(loggedUser));
      navigate("/");
    } else {
      navigate(url);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline" defaultActiveKey="/">
            {navObjList.map((navObj) => (
              <Nav.Link
                eventKey={navObj.url}
                onClick={() => navigation(navObj.url)}
              >
                {navObj.name}
              </Nav.Link>
            ))}
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
                    onClick={() => navigation("/logout")}
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
