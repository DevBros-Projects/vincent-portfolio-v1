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
  wrapper: `flex justify-evenly `,
  pane: `flex-1`,
};
const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.pane}>
        <Left />
      </div>
      <div className="justify-items-center ${style.pane}">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;
