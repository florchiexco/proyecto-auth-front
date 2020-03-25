import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default class UserNav extends React.Component {

  render() {
    let navLogin;

    if (!localStorage.getItem("token")) {
      navLogin = (
        <NavLink to="/login" style={{ color: "white", padding: 10 }} activeStyle={{ fontWeight: "bold", color: "#5cb85c" }}>
          Iniciar sesión
        </NavLink>
      );
    }

    return (
      <>
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
          <h3 style={{ color: "white", padding: 10 }} activeStyle={{ fontWeight: "bold", color: "#5cb85c" }}> Inicio </h3>
          <Nav className="mr-auto">
                <Nav>
                    <Button onClick={this.props.logout} style={{ color: "white" }} variant="outline-warning"> Cerrar sesión </Button>
                </Nav>
            </Nav>
          {navLogin}
        </Navbar>
      </>
    );
  }
}