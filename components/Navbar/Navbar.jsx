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

import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { GiPoolTriangle } from "react-icons/gi";
import { GoEyeClosed } from "react-icons/go";
import Link from "next/dist/client/link";

import NavIcons from "./NavIcons";

import { data } from "./navData";
import NavItem from "./NavItem";

const style = {
  wrapper: `md:hidden bg-gray-100 mb-20`,
  nav: " mx-auto flex tracking-wider items-center fixed inset-x-0  top-0 h-20 z-50",
  menu: "font-bold fixed z-50 flex items-center cursor-pointer right-5 top-7 text-2xl text-primary",
  navItem: `mt-5 font-bold text-center text-lg  gradient`,
  btn: "flex items-center cursor-pointer fixed right-5 top-7 z-50",
};

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className={style.wrapper}>
        <nav className={style.nav}>
          <Link href="#">
            <div className="flex ml-3 text-primary">
              <GiPoolTriangle className="text-xl" />
              <BsFillCircleFill className="text-xl" />
            </div>
          </Link>
          {showSidebar ? (
            <button
              className={style.btn}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <GoEyeClosed className="text-xl text-primary" />
            </button>
          ) : (
            <HiMenu
              onClick={() => setShowSidebar(!showSidebar)}
              className={style.menu}
            />
          )}
        </nav>
        <div
          className={`top-0 right-0 w-[100vw] bg-white p-10 fixed h-[100vh] z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          {/* nav iiems mapped */}
          {data.map((item) => (
            <NavItem key={item.id} data={item} />
          ))}

          <NavIcons />
        </div>
      </header>
    </>
  );
};

export default Navbar;
