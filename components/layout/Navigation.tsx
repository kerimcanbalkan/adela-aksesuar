'use client'

import Logo from "../ui/Logo";
import HamburgerMenu from "../ui/HamburgerMenu";
import CartIcon from "../ui/CartIcon";

export default function Navigation() {
	return (
		<nav className="flex justify-between p-6">
			<HamburgerMenu />
			<a href="/">
				<Logo />
			</a>
			<div className="hidden sm:flex">
				<a href="#Anasayfa" className="text-primaryText hover:text-primary mx-3 text-2xl">Anasayfa</a>
				<a href="#Mum" className="text-primaryText hover:text-primary mx-3 text-2xl">Mum</a>
				<a href="#Yuzuk" className="text-primaryText hover:text-primary mx-3 text-2xl">Yüzük</a>
				<a href="#Kolye" className="text-primaryText hover:text-primary mx-3 text-2xl">Kolye</a>
				<a href="#Bijuteri" className="text-primaryText hover:text-primary mx-3 text-2xl">Bijuteri</a>
				<a href="#Kupe" className="text-primaryText hover:text-primary mx-3 text-2xl">Küpe</a>
				<a href="#Bileklik" className="text-primaryText hover:text-primary mx-3 text-2xl">Bileklik</a>
				<a href="#Iletisim" className="text-primaryText hover:text-primary mx-3 text-2xl">İletişim</a>
			</div >
			<a href="#">
				<CartIcon />
			</a>
		</nav >
	)
}
