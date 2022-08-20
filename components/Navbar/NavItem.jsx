/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 21:36:12
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import Link from "next/dist/client/link";

const style = {
  navItem: `cursor-pointer hover:underline decoration-teal-400  mt-5 md:mt-0 font-bold md:font-normal text-center text-lg md:text-{#fff} tracking-wide`,
};
const NavItem = ({ data }) => {
  const { name, link } = data;

  return (
    <>
      <Link href={link}>
        <h3 className={style.navItem}>{name}</h3>
      </Link>
    </>
  );
};

export default NavItem;
