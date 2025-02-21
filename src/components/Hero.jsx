import { IoPaperPlaneOutline } from 'react-icons/io5'
import SLiderImg from '/slider-1.png'
import SLiderImg2 from '/slider-2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const slides = [
  {
    id: 1,
    img: SLiderImg
  },
  {
    id: 2,
    img: SLiderImg2
  },
]

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="overflow-hidden mx-auto max-w-[1610px] relative">    
        <Slider {...settings}>
                {
                    slides.map((slide) => (
                        <div className="w-[1586px] h-[467px] px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-hidden rounded-2xl my-[30px] outline-none" key={slide.id}>
                            <img src={slide.img} alt="" className="w-full object-cover rounded-2xl" />
                        </div>
                    ))
                }
            </Slider>
      </div>
    </>
  )
}

export default Hero