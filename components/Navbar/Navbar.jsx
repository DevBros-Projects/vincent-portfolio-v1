/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 17/08/2022 - 21:02:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
// BsCircle
// BiMenuAltRight
// TbTriangleInverted
// DiGithubBadge
// FaLinkedinIn
// BsTwitter
// FaDiscord

import React, { useState } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { HiMenu } from "react-icons/hi"
import { TbTriangleInverted } from 'react-icons/tb'
import { DiGithubBadge } from 'react-icons/di'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { GiPoolTriangle } from "react-icons/gi"
import { GoEyeClosed } from "react-icons/go"
import Link from 'next/dist/client/link'


const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			<header className="md:hidden bg-gray-100 mb-20">
				<nav className=" mx-auto flex tracking-wider items-center fixed inset-x-0  top-0 h-20 z-50">
					<Link href="#">
						<div className='flex ml-3 text-primary'>
							<GiPoolTriangle className='text-xl' />
							<BsFillCircleFill className='text-xl' />
						</div>
					</Link>
					{showSidebar ? (
						<button
							className="flex items-center cursor-pointer fixed right-5 top-7 z-50"
							onClick={() => setShowSidebar(!showSidebar)}
						>
							<GoEyeClosed className='text-xl text-primary' />
						</button>
					) : (



						<HiMenu onClick={() => setShowSidebar(!showSidebar)} className="font-bold fixed z-50 flex items-center cursor-pointer right-5 top-7 text-2xl text-primary" />
					)}
				</nav>
				<div
					className={`top-0 right-0 w-[100vw] bg-white  p-10  text-white fixed h-[100vh] z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
						}`}
				>
					<Link href="#about">
						<h3
							onClick={() => setShowSidebar(!showSidebar)}
							className="mt-10 hover:text-gray-900  hover:border-b-4   text-center text-lg   text-primary"
						>
							About
						</h3>
					</Link>
					<Link href="#services">
						<h3
							onClick={() => setShowSidebar(!showSidebar)}
							className="mt-5 hover:text-gray-900  hover:border-b-4  text-center text-lg   text-primary"
						>
							Portfolio
						</h3>
					</Link>
					<Link href="#">
						<h3
							onClick={() => setShowSidebar(!showSidebar)}
							className="mt-5 hover:text-gray-900  hover:border-b-4  text-center text-lg   text-primary"
						>
							<a target="_blank"> Blog </a>
						</h3>
					</Link>



				</div>

			</header>
		</>

	)
}

export default Navbar