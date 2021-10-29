import React from 'react';
import TripList from './components/TripList';
import Button from './components/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <Slider {...settings}>
      <div>
        <img src={process.env.PUBLIC_URL + "/jeju.jpg"} width="100%" height="700px"/>
      </div>
      <div>
        <TripList />
      </div>
      <div>
        <Button/>
      </div>
    </Slider>
  ) 
};

export default App;