'use client'

import Logo from "../ui/Logo";
import HamburgerMenu from "../ui/HamburgerMenu";
import CartIcon from "../ui/CartIcon";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="flex justify-between p-6">
			<HamburgerMenu />
			<Link href="/">
				<Logo />
			</Link>
			<div className="hidden sm:flex">
				<Link href="/" className="text-primaryText hover:text-primary mx-3 text-2xl">Anasayfa</Link>
				<Link href="#Mum" className="text-primaryText hover:text-primary mx-3 text-2xl">Mum</Link>
				<Link href="#Yuzuk" className="text-primaryText hover:text-primary mx-3 text-2xl">Yüzük</Link>
				<Link href="#Kolye" className="text-primaryText hover:text-primary mx-3 text-2xl">Kolye</Link>
				<Link href="#Bijuteri" className="text-primaryText hover:text-primary mx-3 text-2xl">Bijuteri</Link>
				<Link href="#Kupe" className="text-primaryText hover:text-primary mx-3 text-2xl">Küpe</Link>
				<Link href="#Bileklik" className="text-primaryText hover:text-primary mx-3 text-2xl">Bileklik</Link>
				<Link href="#Iletisim" className="text-primaryText hover:text-primary mx-3 text-2xl">İletişim</Link>
			</div >
			<Link href="#">
				<CartIcon />
			</Link>
		</nav >
	)
}
