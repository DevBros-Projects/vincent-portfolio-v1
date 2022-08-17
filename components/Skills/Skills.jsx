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
import Data from './skillList';
import Skill from './SkillEntry';

const style = {
	header: `text-2xl md:text-3xl mb-2`,
	line: `border-1`,
};

const Skills = () => {


	return (
		<div>

			<div className='mb-2'>
				<h1 className={style.header}>Skills</h1>
				<hr className={style.line} />
			</div>
			<div className='block md:flex md:flex-wrap'>
				{
					Data.map(item => (
						<Skill key={item.id} header={item.header} paragraph={item.paragraph} />
					))
				}
			</div>
		</div>
	)
}

export default Skills