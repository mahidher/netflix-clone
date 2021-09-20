import React from "react";
import movieData from "../../requests";
import Row from "../Row/Row";
import "./Home.page.css";
const Homepage = () => {
  return (
    <div>
      <div className='home'>
        <img
          class='home-img'
          src='https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXYhG2_jkSnW0csCRc3ykPc6QLBT_PJCsovmqts2AUJIY6dKt-gTu8rFL-LOI0Ht8JTvQtZ6c4ebo0bHjJfaj66Ss733.webp?r=397'
        ></img>
        <div className='home-content'>
          {movieData.map((data) => (
            <Row title={data.title} url={data.url}></Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
