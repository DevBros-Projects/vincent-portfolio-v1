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
  header: `text-5xl tracking-wider leading-2`,
};

const LeftScreen = () => {
  return (
    <div>
      <h3 className={style.header}>
        Hi, I’m Vincent.
        <br /> A web developer <br /> and UI designer.
      </h3>
      <p className="mt-3">
        I create simple and visually appealing digital products <br /> which
        provide a seamless experience to the end user.{" "}
      </p>
      <button className="mt-3 py-1 px-4 bg-primary text-white  transition ease-in duration-200 text-center">
        Contact Me
      </button>
    </div>
  );
};

export default LeftScreen;
