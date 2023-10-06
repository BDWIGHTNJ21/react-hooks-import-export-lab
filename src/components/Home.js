import React from "react";
import {username,city} from '../data/user.js'



const Home=()=> {
  return (
    <div id="home">
          <h2>
       {username} is a Web Developer from {city}
      </h2>
    </div>
  );
}
export default Home;