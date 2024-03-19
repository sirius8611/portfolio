'use client'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

import Link from "next/link";


function Footer() {
  let github = "https://github.com/sirius8611" 
  let facebook = "https://www.facebook.com/nhh.1408/" 
  let mail = "mailto:hieuhoangnguyen1408@gmail.com" 
  let linkedin = "www.linkedin.com/in/hieu-nguyen-hoang-426418201"
  const path = usePathname();
  const renderLayout = path !== "/" && path !== "_error";
  return (
    <>
    {/* {renderLayout && ( */}
      <div className="flex justify-between bottom-0 border-y-2">
        <p className="text-center">Created by Hoang Hieu</p>
        <div className=" flex justify-center">
          <Link className="hover:zoom" href={github}><FaGithub /></Link>
          <Link className="" href={facebook}><FaFacebook /></Link>
          <a className="" href={mail}><IoMdMail /></a>
          <a className="" href={linkedin}><FaLinkedin /></a>
        </div>
      </div>
     {/* )}  */}
    </>
  )
}

export default Footer