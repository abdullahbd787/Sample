import {BiSearch,BiDotsVerticalRounded, BiVideo} from 'react-icons/bi';
import {CgMenuGridO} from 'react-icons/cg'
import {FaUserCircle} from 'react-icons/fa';

import logoImage from '../assets/Images/logo-light.png';
export default function Navbar() {
  return (
    <>
      <div className='navbar'>
         <div className="navbar-left flex">
            <div className="collaps-button">
               <a href="#">
               <CgMenuGridO/>
               </a>
            </div>
            <div className="logo">
               <a className='' href="#">
               <img className='w-44' src={logoImage} alt="ClickView" />
               </a>
            </div>
         </div>
         <div className="navbar-middle">
            <div className="search-box flex text-white">
               <input type="text" placeholder="search for videos" />
               <button>
               <BiSearch/>
               </button>
            </div>
         </div>
         <div className="navbar-right">
            <a href="#" className='flex'>
               <BiVideo/>
               <span className='ml-1'>Create</span>
            </a>
            <a href="#" className='flex'>
               <span className='mr-1'>My Account</span>
               <FaUserCircle/>
               <BiDotsVerticalRounded/>
            </a>
         </div>

      </div>
    </>
  )
}
