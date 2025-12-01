"use client";

import {TypeAnimation} from "react-type-animation";

export default function TypingProgrammingLanguages()
{
	return <TypeAnimation
		sequence={[
			2500,
			"I like to write code in Java!",
			2500,
			"I can write code in JavaScript...",
			1000,
			"I can write code in JavaScript... please don't make me...",
			2500,
			"I can write code in ",
			"I can write code in HTML & CSS...",
			2500,
			"I can write code in ",
			"I can write code in PHP...",
			2500,
			"I can write code in ",
			"I can write code in Python..."
		]}
		speed={40}
		repeat={Infinity}
		className={"profile-typing"}
		cursor={false}
	/>;
}