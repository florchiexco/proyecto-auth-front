import React from "react";
//Componentes programados
import userService from "./services/userService";
import Login from "./components/Login.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        login: false
      }
    };
  }

  //Ejecuta el método de login del userService y luego almacena en el localstorage el token del usuario
  login = async user => {
    userService.loginService(user).then(acept => {
      if (acept) {
        let loginUser = {
          login: true,
          id: acept.user.id,
          mail: acept.user.mail
        };
        this.setState({
          user: loginUser
        });
        localStorage.setItem("token", acept.access_token);
      }
    });
  };


  render(){
    return (
      <>
      <Router>
         <Route exact path="/login">
          <Login login={this.login} />
          </Route>
          </Router>
      </>
    )
  }

}
