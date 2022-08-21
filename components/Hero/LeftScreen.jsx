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
  header: `text-5xl`,
};

const LeftScreen = () => {
  return (
    <div>
      <h3 className={style.header}>
        Hi, I’m Vincent. A web developer and UI designer.
      </h3>
      <p>
        I create simple and visually appealing digital products which provide a
        seamless experience to the end user.{" "}
      </p>
      <button>Contact Me</button>
    </div>
  );
};

export default LeftScreen;
