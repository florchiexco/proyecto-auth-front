export const loginService = async user => {
    let response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mail: user.mail, pass: user.pass })
    });
    let result = await response.json();
  
    return result;
  };
  
  export const logoutService = async () => {
    await fetch("http://localhost:5000/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
      authorization: JSON.stringify({ token: localStorage.getItem("token") })
    });
  
    // let result = await response.json();
    // return result;
  };
  
  export const getLoggedUser = async token => {
    let response = await fetch("http://localhost:5000/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token }),
      authorization: JSON.stringify({ token: token })
    });
    let result = await response.json();
  
    return JSON.parse(result);
  };
  
  export default {
    loginService,
    logoutService,
    getLoggedUser
  };