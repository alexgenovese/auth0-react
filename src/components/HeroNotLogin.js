import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Sign In</h1>

    <p className="lead">
      This is the public area
    </p>
  </div>
);

export default Hero;
