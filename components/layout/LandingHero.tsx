import { Italianno } from 'next/font/google'
import CustomButton from '../ui/CustomButton';

const itallianno = Italianno({
	weight: '400',
	subsets: ['latin'],
})

export default function LandingHero() {
	return (
		<section className="relative h-[70vh] w-full  flex justify-center items-center text-secondary bg-hero bg-cover bg-center bg-no-repeat flex-col sm:bg-big-hero  sm:bg-cover sm:bg-bottom ">
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<p className={`relative text-center font-bold text-5xl text-secondary drop-shadow-lg ${itallianno.className} sm:text-7xl`}>
				Işığın Büyüsü!<br />
				El Yapımı Mumlar<br />
				Şık Tasarım Aksesuarlar
			</p>
			<CustomButton className="relative z-10 mt-4 sm:text-xl" text={"Alisverise Basla!"} theme="secondary" />
		</section >
	);
}

