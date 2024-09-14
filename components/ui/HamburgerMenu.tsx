import { useState } from "react";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-primaryText transition ease transform duration-300`;

	return (
		<div className="sm:hidden">
			<button
				className="fixed flex flex-col h-6 w-6 justify-center items-center group z-50"
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

			<div
				className={`fixed w-screen h-screen bg-secondary text-3xl top-0 left-0 flex flex-col justify-center items-center z-40
					transition-opacity duration-500 ease-in-out
					${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} `}
				onClick={() => setIsOpen(!isOpen)}
			>
				<a href="#Anasayfa" className="text-primaryText my-2 hover:text-primary">Anasayfa</a>
				<a href="#Mum" className="text-primaryText my-2 hover:text-primary">Mum</a>
				<a href="#Yuzuk" className="text-primaryText my-2 hover:text-primary">Yüzük</a>
				<a href="#Kolye" className="text-primaryText my-2 hover:text-primary">Kolye</a>
				<a href="#Bijuteri" className="text-primaryText my-2 hover:text-primary">Bijuteri</a>
				<a href="#Kupe" className="text-primaryText my-2 hover:text-primary">Küpe</a>
				<a href="#Bileklik" className="text-primaryText my-2 hover:text-primary">Bileklik</a>
				<a href="#Iletisim" className="text-primaryText my-2 hover:text-primary">İletişim</a>
			</div>		</div>
	);
}

