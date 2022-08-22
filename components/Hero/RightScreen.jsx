/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 23:42:28
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import Image from "next/image";
import photo from "../../public/photo.png";
const style = {
  image: ``,
};

const RightScreen = () => {
  return (
    <>
      <Image
        className={style.image}
        src={photo}
        alt="image"
        width={350}
        height={500}
      />
    </>
  );
};

export default RightScreen;
