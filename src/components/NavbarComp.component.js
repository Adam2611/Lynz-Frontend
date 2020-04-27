import React, { Component } from "react";
import "./Components.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../images/shopping-cart.png";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar className="nav" bg="primary" expand="lg">
          <NavbarBrand href="/Lynz-Frontend" id="navbar-brand">
            <img
              id="logo"
              alt=""
              src={logo}
              width="39px"
              height="39px"
              className="d-inline-block align-top"
            />{" "}
            Lynz &nbsp;
          </NavbarBrand>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/Lynz-Frontend/busyness" className="navbartext">
                View Busyness
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Lynz-Frontend/submit" className="navbartext">
                Submit Live Busyness
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavbarComp;
