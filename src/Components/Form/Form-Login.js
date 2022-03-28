import React, { useState } from "react";
import './index.css'
//props children
function FormLogin({ Login, error }) {
  //set ustate login object empty
  const [log, setLog] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngan chan khi chua du dieu kien
    Login(log);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-login">
        <h2 className="login-title"> Login Animal Pages</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setLog({ ...log, name: e.target.value })}
            value={log.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setLog({ ...log, email: e.target.value })}
            value={log.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setLog({ ...log, password: e.target.value })}
            value={log.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default FormLogin;
