'use client'

import Logo from "../ui/Logo";
import HamburgerMenu from "../ui/HamburgerMenu";
import CartIcon from "../ui/CartIcon";

export default function Navigation() {
	return (
		<header className="container flex justify-between p-6">
			<HamburgerMenu />
			<a href="/">
				<Logo />
			</a>
			<a href="#">
				<CartIcon />

			</a>
		</header>
	)
}
