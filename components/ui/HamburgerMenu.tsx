import { useState } from "react";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-primaryText transition ease transform duration-300`;

	return (
		<button
			className="flex flex-col h-6 w-6 justify-center items-center group"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={`${genericHamburgerLine} ${isOpen
					? "rotate-45 translate-y-1.5 opacity-100"
					: "opacity-100"
					}`}
			/>
			<div
				className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"
					}`}
			/>
			<div
				className={`${genericHamburgerLine} ${isOpen
					? "-rotate-45 -translate-y-1.5 opacity-100"
					: "opacity-100"
					}`}
			/>
		</button>
	);
}

