import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Teamwork</h1>
          <p className="lead">
            Teamwork is a social network that is built to improve communication channel between the staff of an
            organisation and interact in a better way.
          </p>
          <div className="buttons">
            <a href="#register">Register</a>
            ||
            <a href="#login">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
