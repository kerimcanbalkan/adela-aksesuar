import { Italianno } from 'next/font/google'
import Button from '../ui/Button';

const itallianno = Italianno({
	weight: '400',
	subsets: ['latin'],
})

export default function LandingHero() {
	return (
		<section className="relative container h-[50vh] w-full bg-hero flex justify-center items-center text-secondary bg-cover bg-no-repeat flex-col">
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<p className={`relative text-center font-bold text-5xl text-white drop-shadow-lg ${itallianno.className}`}>
				Işığın Büyüsü!<br />
				El Yapımı Mumlar<br />
				Şık Tasarım Aksesuarlar
			</p>
			<Button className="relative z-10 mt-4" text={"Alisverise Basla"} />
		</section >
	);
}

