import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1>About To-Do App</h1>
        <p>
          Welcome to the To-Do App! Our app is designed to help you stay
          organized and productive by managing your daily tasks efficiently.
        </p>
        <ul>
          <li>Add and organize your tasks easily.</li>
          <li>Mark tasks as completed to track your progress.</li>
          <li>Delete tasks you no longer need.</li>
          <li>Enjoy a clean and user-friendly interface.</li>
        </ul>
        <p>
          Whether you're a student, a professional, or someone who simply loves
          staying on top of things, the To-Do App is here to make your life
          easier. Start organizing your day with us now!
        </p>
      </div>
    </section>
  );
};

export default About;
