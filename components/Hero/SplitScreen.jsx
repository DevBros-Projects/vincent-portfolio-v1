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
  wrapper: `flex space-x-12`,
  pane: ``,
};
const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div className={style.wrapper}>
      <div className="justify-start w-3/5 ${style.pane}">
        <Left />
      </div>
      <div className=" flex justify-center ">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
