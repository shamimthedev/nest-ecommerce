import { IoPaperPlaneOutline } from 'react-icons/io5'
import HeroBackground from '/hero-background.png'

const Hero = () => {
  return (
    <>
      <section id="hero" className='px-3'>
        <div className="max-w-[1610px] mx-auto">
          <div className="relative">
            <div className="h-[350px] xl:h-[538px] max-w-[1264px]">
              <img src={HeroBackground} alt="" className='h-full w-full'/>
            </div>
            <div className="absolute top-[46px] xl:top-24 left-[41px] xl:left-[75px]">
              <h1 className='text-[#253D4E] max-w-[384px] xl:max-w-[680px] text-[40px] xl:text-[72px] leading-[40px] xl:leading-[72px] font-bold mb-[19px] xl:mb-[31px]'>Don’t miss amazing grocery deals</h1>
              <p className='font-lato text-[#7E7E7E] text-[22px] xl:text-[30px] leading-[24px] mb-[40px] xl:mb-[65px]'>Sign up for the daily newsletter</p>
              <div className="flex items-center h-[64px] w-[80vw] sm:w-[55vw] md:w-[45vw] lg: bg-white rounded-[50px] pl-7 gap-x-2">
                <IoPaperPlaneOutline className='text-[#838383] text-2xl' />
                <input className='grow w-full h-full font-lato text-[#838383] outline-none' type="text" placeholder='Your email address' />
                <button className='px-4 sm:px-10 h-full bg-greeny text-white rounded-[50px] cursor-pointer'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero