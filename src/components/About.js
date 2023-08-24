//src/components/About.js

import React from "react";
//import about from '.src/About';
import image from '../data/user'


//const image =image

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src= {image} alt="I made this" />
    </div>
  );
  }
export default About;

