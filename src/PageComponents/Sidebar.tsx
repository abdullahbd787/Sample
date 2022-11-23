import {HiOutlineHome} from 'react-icons/hi';
import {MdViewQuilt} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';
import {GiNetworkBars, GiMaskedSpider}from 'react-icons/gi';
import {MdOutlineTrendingUp} from 'react-icons/md';
import {BiVideo}from 'react-icons/bi';
import {FiFilm}from 'react-icons/fi';
import {AiOutlineStar}from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
         <ul className='section'>
            <li>
               <a href="#">
                  <HiOutlineHome/>
                  <span>Home</span>
               </a>
            </li>
            <li>
            <a href="#">
                  <MdViewQuilt/>
                  <span>Participate</span>
               </a>
            </li>
            <li>
            <a href="#">
                  <RiArticleLine/>
                  <span>Articles</span>
               </a>
            </li>
         </ul>
         <ul className='section'>
            <li>
               <a href="#">
                  <GiNetworkBars/>
                  <span>Top videos</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <MdOutlineTrendingUp/>
                  <span>Trending</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <BiVideo/>
                  <span>Latest videos</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <FiFilm/>
                  <span>Movies</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <AiOutlineStar/>
                  <span>Popular Channels</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <FaPlay/>
                  <span>Quick View</span>
               </a>
            </li>
         </ul>
         <ul className='section'>
            <h3>EXPLORE MORE</h3>
            <li>
               <a href="#">
                  <GiMaskedSpider/>
                  <span>Report Bug</span>
               </a>
            </li>
         </ul>
         <footer>
            <p className='copyright'>
               Copyright © 2022 ClikView. All rights reserved.
            </p>
         </footer>
      </div>
    </>
  )
}
