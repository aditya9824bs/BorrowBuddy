import React from "react";

const Signup = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="auth-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
