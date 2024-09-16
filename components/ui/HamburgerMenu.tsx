import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-primaryText transition ease transform duration-300`;

	return (
		<div className="sm:hidden">
			<button
				className="absolute flex flex-col h-6 w-6 justify-center items-center group z-50"
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
				<Link href="/" className="text-primaryText my-2 hover:text-primary">Anasayfa</Link>
				<Link href="#Mum" className="text-primaryText my-2 hover:text-primary">Mum</Link>
				<Link href="#Yuzuk" className="text-primaryText my-2 hover:text-primary">Yüzük</Link>
				<Link href="#Kolye" className="text-primaryText my-2 hover:text-primary">Kolye</Link>
				<Link href="#Bijuteri" className="text-primaryText my-2 hover:text-primary">Bijuteri</Link>
				<Link href="#Kupe" className="text-primaryText my-2 hover:text-primary">Küpe</Link>
				<Link href="#Bileklik" className="text-primaryText my-2 hover:text-primary">Bileklik</Link>
				<Link href="#Iletisim" className="text-primaryText my-2 hover:text-primary">İletişim</Link>
			</div>		</div>
	);
}

