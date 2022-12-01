import React from 'react'

import {HiTag} from 'react-icons/hi';
import {BsPencilSquare} from 'react-icons/bs';
import {BsImage} from 'react-icons/bs';
import {RiLogoutCircleFill} from 'react-icons/ri'
import {TbBellRinging} from 'react-icons/tb';

import logo1 from '../../Images/logo1-min.png'
import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
export default function Dashboard() {
  const router = useRouter();
  const logout = () => {
    localStorage.clear();
    router.push("/")

  }
  return (
    <>
     <div style={{background:"#270F33"}} className="addEvent col-1">
          <Link href="/">  <Image className="candleriggs" style={{'width':'200px'}} src={logo1} alt="" /></Link>
            <div className="addEventLinks">
              <div className="addeventImage">
              <div className="lists">
                  <HiTag className="listIcon"/><Link href="/all-events" style={{'color':"white"}}> Events</Link>
                  </div>
                <div className="addeventSecond">
                    <div className="lists">
                  <BsPencilSquare className="listIcon"/><Link href="/all-banners" style={{'color':"white"}}> Home Page Banners</Link>
                  </div>
                  <div className="lists"  >
                  <BsPencilSquare className="listIcon"/><Link href="/all-must-see-events" style={{'color':"white"}}> Must See Events</Link>
                  </div>
                      <div className="lists">
                  <BsImage className="listIcon"/><Link href="/all-gallery" style={{marginLeft:"0.9rem",'color':"white"}}>Gallery </Link>
                  </div>
                  <div className="lists">
                  <TbBellRinging className="listIcon"/><Link href="/all-subscription" style={{marginLeft:"0.9rem",'color':"white"}}>Subscriptions </Link>
                  </div>
                 
                  <div className="lists" style={{'color':"white"}}>
                  <RiLogoutCircleFill />  <button style={{border:"none",background:"transparent",fontWeight:"600",letterSpacing:"0.4px",marginLeft:"0.6rem",'color':"white"}} onClick={logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
    
    </>
  )
}
