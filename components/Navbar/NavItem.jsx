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
