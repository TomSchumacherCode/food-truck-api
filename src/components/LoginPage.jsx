import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setActiveUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (
      username.length < 4 ||
      username.length > 20 ||
      password.length < 4 ||
      password.length > 20
    ) {
      return;
    }
    setActiveUser(username);
    navigate("/search");
  }
  return (
    <div className="login-form flex flex-column">
      <h3 className="text-center">Login</h3>
      <div className="form-element flex flex-column">
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
        />
      </div>
      <div className="form-element flex flex-column">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
