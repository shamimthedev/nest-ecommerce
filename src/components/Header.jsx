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
      <div id="topSection" className="border-b border-[#ECECEC] font-lato">
        <div className="max-w-[1610px] mx-auto">
          <div className="h-[37px] flex justify-between items-center text-[#7E7E7E] text-[13px] leading-[13px]">
            <ul className="flex gap-5 font-medium">
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-10px]">About Us</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-10px]">My Account</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-10px]">Wishlist</li>
              <li>Order Tracking</li>
            </ul>
            <p className="text-sm leading-3.5 text-center">
              100% Secure delivery without contacting the courier <br /> Supper Value Deals - Save more with coupons
            </p>
            <div className="flex gap-[20px]">
              <p className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-10px]">
                Need help? Call Us: <span className="font-semibold text-[#3BB77E]">+ 1800 900</span>
              </p>
              <div className="flex items-center gap-[2px] relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-10px]">
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
        <div className="max-w-[1610px] mx-auto">
          <div className="flex justify-between py-9">

            {/* Logo here  */}
            <div className="w-[180px]">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>

            {/* searchbar here  */}
            <div className="flex items-center rounded-sm border-2 border-[#BCE3C9] h-[54px] text-sm">
              <div className="flex items-center gap-2 px-5 relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-0 font-bold text-[#253D4E]">
                <span>All Categories</span>
                <IoIosArrowDown className="text-[#7E7E7E]" />
              </div>
              <div className="flex items-center justify-between px-5 w-[25vw] font-lato text-[#838383]">
                <input className="outline-none border-none w-full h-full" type="text" placeholder="Search for items..." />
                <IoSearchOutline className="text-xl" />
              </div>
            </div>

            {/* location and icons here */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 mr-3 h-10 px-[14px] rounded-sm cursor-pointer text-[#B6B6B6] text-sm border border-[#ECECEC] hover:shadow-3xl">
                <IoLocationOutline />
                <span className="text-greeny leading-[35px]">Your Location</span>
                <IoIosArrowDown />
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <div className="relative">
                  <img src={Compare} alt="Compare icon" className="w-[25px] h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-5 w-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-xs">
                    3
                  </span>
                </div>
                <span className="self-end font-lato text-[#7E7E7E]">Compare</span>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <div className="relative">
                  <img src={Wishlist} alt="Wishlist icon" className="w-[25px] h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-5 w-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-xs">
                    6
                  </span>
                </div>
                <span className="self-end font-lato text-[#7E7E7E]">Wishlist</span>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <div className="relative">
                  <img src={Cart} alt="Cart icon" className="w-[25px] h-[25px]" />
                  <span className="absolute right-[-10px] top-[-8px] h-5 w-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-xs">
                    1
                  </span>
                </div>
                <span className="self-end font-lato text-[#7E7E7E]">Cart</span>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <img src={Account} alt="Account icon" className="w-[25px] h-[25px]" />
                <span className="self-end font-lato text-[#7E7E7E]">Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category with Menu Section  */}
      <div id="header-bottom" className="border-y border-[#ECECEC]">
        <div className="max-w-[1610px] mx-auto">
          <div className="h-[73px] py-[15px] flex items-center justify-between gap-[35px]">
            <div className="flex items-center gap-x-[35px]">
              <div className="flex gap-x-2 py-3 px-5 font-bold bg-greeny rounded-[5px] text-white items-center cursor-pointer">
                <img src={Browse} alt="Browse icon" className="w-4" />
                <span>Browse All Categories</span>
                <IoIosArrowDown />
              </div>
              <div className="flex gap-x-12">
                <Link className='flex gap-x-2 items-center font-bold' to='/'> <img className="self-start" src={Deals} alt="" />Deals</Link>
                <ul className="flex items-center gap-x-[34px]">
                  {navList.map((nav) => {
                    return (
                      <li key={nav.id}><NavLink className='flex gap-x-1 items-center font-bold' to={nav.url} style={({ isActive }) => ({
                        color: isActive ? "#3BB77E" : "#253D4E",
                      })}>{nav.name} <img src={nav.img} className="w-2" /></NavLink></li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={Support} alt="" className="w-9"/>
              <div className="flex flex-col">
                <span className="text-greeny font-bold text-[26px]">1900 - 888</span>
                <span className="text-[#7E7E7E] font-medium text-xs font-lato">24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Header