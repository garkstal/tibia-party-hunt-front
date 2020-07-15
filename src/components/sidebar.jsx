import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    /*  <Nav className="sidebar">
      <div className="sidebar-title">
        <Navbar.Brand>Dashboard</Navbar.Brand>
      </div>
      <div className="sidebar-item">
        <p>LOLOLOLOLOLOL</p>
      </div>
      <hr className="vertical-lane" />
    </Nav>*/
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-dark sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <hr className="vertical-lane" />
        <Navbar.Brand>LULO</Navbar.Brand>
        <Nav.Item>
          <Nav.Link as={Link} to="/my-account">
            My Account
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
  // <Nav collapseOnSelect expand="lg" className="sidebar box-shadow"></Nav>
};

export default Sidebar;
