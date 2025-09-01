import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); 
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
