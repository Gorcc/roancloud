import Carousel from "react-bootstrap/Carousel";
import testImg from "../Styles/resim1.png";
import testImg2 from "../Styles/resim2.png";
import testImg3 from "../Styles/image3.webp";

import "../Styles/Hero.scss";

function CarouselFadeExample() {
  return (
    <div className="hero-container">
      <Carousel fade className="hero-carousel">
        <Carousel.Item>
          <img src={testImg} alt="" />
          <Carousel.Caption>
            <h3>Welcome to Roan Cloud</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={testImg2} alt="" />
          <Carousel.Caption>
            <h3>Discover and purchase the greatest products at direct wholesale pricing.</h3>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
