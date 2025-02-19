import { IoIosArrowDown } from "react-icons/io"
import Logo from '/logo.png'
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5"
import Browse from '/browse.svg'
import Compare from '/compare.svg'
import Wishlist from '/wishlist.svg'
import Cart from '/cart.svg'
import Account from '/account.svg'
import Deals from '/deals.svg'
import Arrow from '/down-arrow.svg'
import Support from '/support.svg'
import { Link, NavLink } from "react-router"
import SelectDrop from "./SelectDrop"


const Header = () => {
  const navList = [
    {
      id: 1,
      name: 'Home',
      url: '/',
      img: Arrow
    },
    {
      id: 2,
      name: 'About',
      url: '/about'
    },
    {
      id: 3,
      name: 'Shop',
      url: '/shop',
      img: Arrow
    },
    {
      id: 4,
      name: 'Vendors',
      url: '/vendors',
      img: Arrow
    },
    {
      id: 5,
      name: 'Mega Menu',
      url: '/mega-menu',
      img: Arrow
    },
    {
      id: 6,
      name: 'Blog',
      url: '/blog',
      img: Arrow
    },
    {
      id: 7,
      name: 'Pages',
      url: '/pages',
      img: Arrow
    },
    {
      id: 8,
      name: 'Contact',
      url: '/contact'
    },
  ]
  return (
    <>
      {/* Top Header  */}
      <div id="topSection" className="hidden lg:block border-b border-[#ECECEC] font-lato">
        <div className="max-w-[1610px] mx-auto">
          <div className="h-[37px] flex justify-between items-center text-[#7E7E7E] text-[13px] leading-[13px] lg:px-12 xl:px-16 2xl:px-20">
            <ul className="flex gap-3 xl:gap-5 font-medium">
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">About Us</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">My Account</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">Wishlist</li>
              <li>Order Tracking</li>
            </ul>
            <p className="text-xs xl:text-sm leading-4 text-center">
              100% Secure delivery without contacting the courier <br /> Supper Value Deals - Save more with coupons
            </p>
            <div className="flex gap-3 xl:gap-5">
              <p className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                Need help? Call Us: <span className="font-semibold text-[#3BB77E]">+ 1800 900</span>
              </p>
              <div className="flex items-center gap-[2px] relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                <span className="font-medium">English</span>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center gap-[2px]">
                <span className="font-medium">USD</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo with Search */}
      <div id="middleSection">
        <div className="max-w-[1610px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex justify-between items-center gap-x-5 2xl:gap-x-11 lg:h-[96px] h-[70px]">

            {/* Mobile Menu  */}
            <div className="w-[44px] text-3xl lg:hidden">
              &equiv;
            </div>

            {/* Logo here  */}
            <div className="w-[150px] 2xl:w-[180px]">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-[700px] items-center rounded-sm border-2 border-[#BCE3C9] h-[44px] xl:h-[48px] 2xl:h-[54px]">
              {/* Category Dropdown */}
                <SelectDrop/>

              {/* Search Input */}
              <div className="flex-grow flex items-center px-3 xl:px-5 relative">
                <input
                  className="w-full h-full outline-none border-none text-[#838383] text-xs xl:text-sm 2xl:text-base placeholder-gray-400"
                  type="text"
                  placeholder="Search for items..."
                />
                <IoSearchOutline className="text-lg xl:text-xl text-gray-500 cursor-pointer absolute right-3" />
              </div>
            </div>

            {/* location and icons here */}
            <div className="flex items-center gap-x-6 lg:gap-x-4 2xl:gap-x-5">
              <div className="hidden lg:flex items-center gap-2 xl:mr-3 h-10 px-[8px] xl:px-[14px] rounded-sm cursor-pointer text-[#B6B6B6] text-xs xl:text-sm border border-[#ECECEC] shadow-sm hover:shadow-md">
                <IoLocationOutline />
                <span className="text-greeny">Your Location</span>
                <IoIosArrowDown />
              </div>
              <div className="hidden lg:flex items-baseline gap-x-1 cursor-pointer">
                <div className="relative">
                  <img src={Compare} alt="Compare icon" className="w-[20px] h-[18px] 2xl:w-[25px] 2xl:h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                    3
                  </span>
                </div>
                <span className="font-lato text-[#7E7E7E] text-sm xl:text-base">Compare</span>
              </div>
              <div className="flex items-baseline gap-x-1 cursor-pointer">
                <div className="relative">
                  <img src={Wishlist} alt="Wishlist icon" className="w-[20px] h-[18px] 2xl:w-[25px] 2xl:h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                    6
                  </span>
                </div>
                <span className="hidden lg:block font-lato text-[#7E7E7E] text-sm xl:text-base">Wishlist</span>
              </div>
              <div className="flex items-baseline gap-x-1 cursor-pointer">
                <div className="relative">
                  <img src={Cart} alt="Cart icon" className="w-[20px] h-[18px] 2xl:w-[25px] 2xl:h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                    1
                  </span>
                </div>
                <span className="hidden lg:block font-lato text-[#7E7E7E] text-sm xl:text-base">Cart</span>
              </div>
              <div className="hidden lg:flex items-baseline gap-x-1 cursor-pointer">
                <img src={Account} alt="Account icon" className="w-[20px] h-[18px] 2xl:w-[25px] 2xl:h-[25px]" />
                <span className="font-lato text-[#7E7E7E] text-sm xl:text-base">Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category with Menu Section  */}
      <div id="header-bottom" className="hidden lg:block border-y border-[#ECECEC]">
        <div className="max-w-[1610px] mx-auto">
          <div className="h-[73px] py-[15px] flex items-center justify-between gap-x-5 2xl:gap-x-[35px] lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex items-center gap-x-6 xl:gap-x-7 2xl:gap-x-[35px]">
              <div className="flex gap-x-1 xl:gap-x-2 py-2 xl:py-3 px-2 xl:px-3 2xl:px-5 font-bold bg-greeny rounded-[5px] text-white items-center cursor-pointer text-xs xl:text-sm 2xl:text-base">
                <img src={Browse} alt="Browse icon" className="w-3 xl:w-4" />
                <span>Browse All Categories</span>
                <IoIosArrowDown />
              </div>
              <div className="flex gap-x-7 xl:gap-x-8 2xl:gap-x-10">
                <Link className='flex gap-x-2 items-center font-bold text-xs xl:text-sm 2xl:text-base' to='/'> <img className="w-3 xl:w-4 2xl:w-5" src={Deals} alt="" />Deals</Link>
                <ul className="flex items-center gap-x-6 xl:gap-x-7 2xl:gap-x-[34px]">
                  {navList.map((nav) => {
                    return (
                      <li key={nav.id}><NavLink className='flex gap-x-1 items-center font-bold text-xs xl:text-sm 2xl:text-base' to={nav.url} style={({ isActive }) => ({
                        color: isActive ? "#3BB77E" : "#253D4E",
                      })}>{nav.name} <img src={nav.img} className="w-2" /></NavLink></li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-x-2 2xl:gap-x-3">
              <img src={Support} alt="" className="w-5 2xl:w-8" />
              <div className="flex flex-col">
                <span className="text-greeny font-bold text-lg 2xl:text-[26px]">1900 - 888</span>
                <span className="text-[#7E7E7E] font-medium text-[10px] 2xl:text-xs font-lato">24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header