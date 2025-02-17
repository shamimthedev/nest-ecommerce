import { IoPaperPlaneOutline } from 'react-icons/io5'
import HeroBackground from '/hero-background.png'

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="max-w-[1610px] mx-auto">
          <div className="wrapper relative">
            <img src={HeroBackground} alt="" />
            <div className="absolute top-24 left-[75px]">
              <h1 className='text-[#253D4E] max-w-[680px] text-[72px] leading-[72px] font-bold mb-[31px]'>Don’t miss amazing grocery deals</h1>
              <p className='font-lato text-[#7E7E7E] text-[30px] leading-[24px] mb-[65px]'>Sign up for the daily newsletter</p>
              <div className="flex items-center h-[64px] w-[40vw] bg-white rounded-[50px] pl-7 gap-x-2">
                <IoPaperPlaneOutline className='text-[#838383] text-2xl'/>
                <input className='w-full h-full font-lato text-[#838383] outline-none' type="text" placeholder='Your email address' />
                <button className='px-10 h-full bg-greeny text-white rounded-[50px] cursor-pointer'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero