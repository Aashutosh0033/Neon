import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <ul className="container">
        <li className="my-3">
          <h2>What is Neon?</h2>
          <p>Neon is a fitness apparel brand which have come with an objective of increasing the comfort level of athletes while performing workouts. Neon is continuously focusing on creating various editions & designs but just quantity sufficient of 100 pieces. We prefer quality over quantity so we just focus on creating unique designs. Neon have decided to donate 10% of income every month for social welfare & development for human beings.
            <br /> " We just not give comfort for our fam,  but also create unique lifestyle who wears NEON "
          </p>
        </li>
        <li className="my-3">
          <h2>Objective of Neon & why we launched Neon? </h2>
          <p>We had a big survey in the city about the comfort & attractiveness of the apparels. We found out that brands in the market just provide either comfort or just attractiveness. Considering these points we started to launch a brand which would be a revolutionary move in the apparel industry. Creating a great combination of attractive designs & comfort we launched a masterpiece with a brand name "NEON" and with an unique concept of just creating 100 pieces with a special edition and giving a street look touch. </p>
        </li>
        <li className="my-3">
          <h2>What we provide? </h2>
          <p>Neon provides all the essential & non essential products for fitness industry. We have a wide range of products like t-shirts, goggles, gym accessories etc for Male & females placed in a unique style which would help people create a better lifestyle.</p>
        </li>
      </ul>

    </div>
  );
};

export default About;
