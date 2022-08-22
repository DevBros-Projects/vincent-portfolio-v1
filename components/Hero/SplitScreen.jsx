/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 23:38:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const style = {
  wrapper: `block md:flex space-x-0 md:space-x-12 mb-12`,
  pane: ``,
};
const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div className={style.wrapper}>
      <div className="w-full md:w-3/5">
        <Left />
      </div>
      <div className=" flex md:justify-center ">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
