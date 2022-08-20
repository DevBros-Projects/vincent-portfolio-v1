/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 20:54:35
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const style = {
  wrapper: `flex justify-center space-x-4 items-center  text-base mt-10 md:mt-0`,
  icon: `text-primary w-5 h-5`,
};

const NavIcons = () => {
  return (
    <>
      <div className={style.wrapper}>
        <DiGithubBadge className={style.icon} />
        <FaLinkedinIn className={style.icon} />
        <BsTwitter className={style.icon} />
        <FaDiscord className={style.icon} />
      </div>
    </>
  );
};

export default NavIcons;
