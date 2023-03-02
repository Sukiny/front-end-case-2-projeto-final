import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../../public/celular.png"
import foto2 from "../../public/celular02.png"
import foto3 from '../../public/celular03.png'

function CarouselFade() {
  return (
    <>
      <div className=' col-lg-6  d-flex justify-content-center'>
        <div id="device-carousel" class="device-holder device-holder-iphonex text-center col-md-10 col-12 order-md-1">

          <Carousel class="carousel-inner">
            <Carousel.Item class="carousel-item   ">
              <img class="" src={foto2} alt="" />
            </Carousel.Item>
            <Carousel.Item class="carousel-item ">
              <img class="" src={foto3} alt="" />
            </Carousel.Item>
          </Carousel>


        </div>
      </div>
    </>
  );
}

export default CarouselFade;