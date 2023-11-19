import Carousel from "react-bootstrap/Carousel";
import testImg from "../Styles/image1.webp";
import testImg2 from "../Styles/image2.webp";
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
        <Carousel.Item>
          <img src={testImg3} alt="" />
          <Carousel.Caption>
            <h3>Elevate your shopping experience with Roan Cloud</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
