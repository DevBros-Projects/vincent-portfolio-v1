/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 17/08/2022 - 19:40:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const style = {
	header: `text-2xl md:text-3xl mb-2`,
	paragraph: `font-light text-sm tracking-wider mt-2`,
	line: `border-1`,
};

const Skills = () => {
	return (
		<div>
			<div>
				<h1 className={style.header}>Skills</h1>
				<hr className={style.line} />
			</div>
		</div>
	)
}

export default Skills