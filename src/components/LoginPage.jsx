import React, { useCallback, useMemo, useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/actions";

function LoginPage({ setUser }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const handleLogin = useCallback(async () => {
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    if (
      username.length < 4 ||
      username.length > 20 ||
      password.length < 4 ||
      password.length > 20
    ) {
      return;
    }
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    if (!json.success) {
      console.log(json.error);
    } else {
      setUser(json.data.username);
      navigate("/search");
    }
  }, []);
  return (
    <div className="login-form flex flex-column">
      <h3 className="text-center">Login</h3>
      <div className="form-element flex flex-column">
        <label htmlFor="username">Username</label>
        <input ref={usernameInput} type="text" id="username" />
      </div>
      <div className="form-element flex flex-column">
        <label htmlFor="password">Password</label>
        <input ref={passwordInput} type="password" id="password" />
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
