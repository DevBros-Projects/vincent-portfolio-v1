/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 23:41:19
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const style = {
  smallHeader: `md:hidden text-3xl tracking-wide leading-1`,
  largeHeader: `hidden md:block text-5xl tracking-wider leading-2`,
  smallP: `md:hidden mt-3 tracking-wide leading-2`,
  largeP: `hidden mt-3 md:block`,
};

const LeftScreen = () => {
  return (
    <div>
      <h3 className={style.largeHeader}>
        Hi, I’m Vincent.
        <br /> A web developer <br /> and UI designer.
      </h3>
      <h3 className={style.smallHeader}>
        Hi, I’m Vincent. A web developer and UI designer.
      </h3>
      <p className={style.largeP}>
        I create simple and visually appealing digital products <br /> which
        provide a seamless experience to the end user.{" "}
      </p>
      <p className={style.smallP}>
        I create simple and visually appealing digital products which provide a
        seamless experience to the end user.{" "}
      </p>
      <button className="my-5  py-1 px-4 bg-primary text-white  transition ease-in duration-200 text-center">
        Contact Me
      </button>
    </div>
  );
};

export default LeftScreen;
