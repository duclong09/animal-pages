import React, { useState } from "react";
import FormLogin from "../Form/Form-Login";
import "../Form/index.css";
import AnimalFeature from "../Pages/List";
import "./styles.css";
function User() {
  const userLogin = {
    email: "animal@gmail.com",
    password: "123456",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (log) => {
    console.log(log); // tra ve value name,email, pass

    //check:
    // //phai object k, ko phai khoi set.
    if (Object.prototype.hasOwnProperty.call(log)) {
      return false;
    }
    if (log.email === userLogin.email && log.password === userLogin.password) {
      //console.log("Login")
      setUser({
        name: log.name,
        email: log.email,
      });
    } else {
      //console.log("not login")
      setError("Not login");
    }
  };

  const LogOut = () => {
    // console.log("Log out")
    setUser({ name: "", email: "" });
  };
  return (
    <div className="User">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>

          <AnimalFeature />

          <div className="logout-user">
            <button onClick={LogOut}>Logout</button>
          </div>
        </div>
      ) : (
        <FormLogin Login={Login} error={error} />
      )}
    </div>
  );
}

export default User;
