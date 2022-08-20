/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 17/08/2022 - 20:04:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const style = {
    paragraph: `font-light text-sm tracking-wider mt-2 mb-2 text-wrap w-full md:w-4/5`,
}

const Skill = ({ item }) => {
    const { header, paragraph } = item;

    return (
        <div className='mb-2 w-full md:w-1/3'>
            <h2 className='text-md text-primary'> {header}</h2>
            <p className={style.paragraph}> {paragraph}</p>
            <hr className='w-full md:w-4/5' />
        </div>
    )
}

export default Skill