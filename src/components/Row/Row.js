import React, { useEffect, useState } from "react";
import movieApi from "../../axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Row.css";
const Row = ({ title, url }) => {
  const [movieData, setmovieData] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w200";
  const movieDataHandler = async () => {
    const data = await movieApi.get(url);

    const {
      data: { results },
    } = data;
    console.log(results);
    setmovieData(results);
  };

  useEffect(() => {
    movieDataHandler();
  }, []);
  return (
    <div className='row'>
      <h3>{title}</h3>
      {/* <div className='movieRow'>
        {movieData &&
          movieData.slice(0, 15).map((data) => (
            <div className='movie' key={data.id}>
              <img src={`${imgUrl}${data.poster_path}`}></img>
            </div>
          ))}
      </div>
      <button type='button'>prev</button>
      <button type='button'>next</button> */}
      <CarouselProvider
        class='carousal'
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={movieData && movieData.length}
        visibleSlides={7}
        step={6}
      >
        <Slider>
          {movieData &&
            movieData.map((data, index) => (
              <Slide index={index}>
                <img
                  className='movieImage'
                  src={`${imgUrl}${data.poster_path}`}
                ></img>
              </Slide>
            ))}
        </Slider>
        <ButtonBack class='button button-back'>
          <i class='fas fa-chevron-left fa-2x'></i>
        </ButtonBack>
        <ButtonNext class='button button-next'>
          <i class='fas fa-chevron-right fa-2x'></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Row;
