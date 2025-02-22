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
    customPaging: i => (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          // bottom: '0px',
          top: '-10px',
          opacity: '0'
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <>
      <div className="overflow-hidden mx-auto max-w-[1610px] relative">
        <Slider {...settings}>
                {
                    slides.map((slide) => (
                        <div className="my-[30px] outline-none overflow-hidden" key={slide.id}>
                            <img src={slide.img} alt="" className="w-full object-cover rounded-2xl" />
                        </div>
                    ))
                }
            </Slider>

            {/* <div className="relative">
            <div className="absolute top-[46px] xl:top-24 left-[41px] xl:left-[75px]">
              <h1 className='text-[#253D4E] max-w-[384px] xl:max-w-[680px] text-[40px] xl:text-[72px] leading-[40px] xl:leading-[72px] font-bold mb-[19px] xl:mb-[31px]'>Don’t miss amazing grocery deals</h1>
              <p className='font-lato text-[#7E7E7E] text-[22px] xl:text-[30px] leading-[24px] mb-[40px] xl:mb-[65px]'>Sign up for the daily newsletter</p>
              <div className="flex items-center h-[64px] w-[80vw] sm:w-[55vw] md:w-[45vw] lg: bg-white rounded-[50px] pl-7 gap-x-2">
                <IoPaperPlaneOutline className='text-[#838383] text-2xl' />
                <input className='grow w-full h-full font-lato text-[#838383] outline-none' type="text" placeholder='Your email address' />
                <button className='px-4 sm:px-10 h-full bg-greeny text-white rounded-[50px] cursor-pointer'>Subscribe</button>
              </div>
            </div>
          </div> */}
      </div>
    </>
  )
}

export default Hero