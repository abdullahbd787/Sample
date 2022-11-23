import {FiPlay, FiShare2} from 'react-icons/fi';
import {BsPlayBtn, BsPinterest, BsWhatsapp} from 'react-icons/bs';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import image from '../assets/Images/image.png';
import proImage from '../assets/Images/pro-image.png';
export default function Herosection() {
  return (
    <>
      <div className="herosection">
         <div className="bg-image">
         <img src={image} alt="" id='image'/>
         </div>
         <div className="content flex">
            <div className="left">
               <h3>
                  <a href="#">
                     I Will Just Say It Again...
                  </a>
               </h3>
               <p>
                  08/23/22·Advanced Medicine·2:15
               </p>
               <div className="buttons">
                  <a href="#" className='button'>
                  <FiPlay/>
                  <span>Play</span>
                  </a>
                  <a href="#" className='button'>
                  <BsPlayBtn/>
                  <span>Channel</span>
                  </a>
               </div>
            </div>
            <div className="right right-bg">
               <div className="publishar-element flex">
                  <div className="publishar-left">
                     <img src={proImage} alt="profile" />
                  </div>
                  <div className="publlishar-name">
                     <a href="javascript:void(0);">Dr Bryan Ardis </a>
                     <div className="publishar-subscribe-button">
                        <a href="javascript:void(0);">
                           SUBSCRIBE
                        </a>
                        <span>332</span>
                     </div>
                  </div>
               </div>
               <div className="video-title">
                  <a href="javascript:void(0);">
                     Ways To Keep Yourself Safe
                  </a>
                  <p>
                     ⁣Ways To Keep Yourself Safe
                  </p>
               </div>
               <div className="video-share flex">
                  <a className='active' href="javascript:void(0);">
                     <FiShare2/>
                     <span>Share</span>
                  </a>
                  <a className='social' href="javascript:void(0);">
                     <GrFacebookOption/>
                  </a>
                  <a className='social' href="javascript:void(0);">
                     <AiOutlineTwitter/>
                  </a>
                  <a className='social' href="javascript:void(0);">
                  <FaLinkedinIn/>
                  </a>
                  <a className='social' href="javascript:void(0);">
                  <BsPinterest/>
                  </a>
                  <a className='social' href="javascript:void(0);">
                  <BsWhatsapp/>
                  </a>
               </div>
               <div className="video-participate">
                  <a href="javascript:void(0);">Participate</a>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}
