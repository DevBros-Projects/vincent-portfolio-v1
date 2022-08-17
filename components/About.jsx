/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 17/08/2022 - 18:56:59
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
const style = {
	header: `text-2xl md:text-3xl mb-2`,
	paragraph: `font-light text-sm tracking-wider mt-2`,
	line: `border-1`,
};

const About = () => {
	return (
		<div>

			<h1 className={style.header}>About</h1>
			<hr className={style.line} />
			<p className={style.paragraph}>
				I am a creative and self-motivated web developer and UI designer who
				loves to solve problems. My background in math informs my logical
				approach, which I use to create simple solutions that are both
				useful and easy to understand. I have a vivid imagination which is
				fueled by my passion for reading, writing and gaming. I’m happy to
				learn new things whenever I get the chance, so feel free to contact
				me if youd like to talk more about any of my hobbies!

			</p>

		</div>
	);
};

export default About;
