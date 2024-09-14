
import Image from "next/image";

type CardProps = {
	id: number,
	img: string,
	title: string,
	category: string,
	price: number,
	className?: string,
};

export default function ProductCard({ id, img, title, price, category, className = "" }: CardProps) {
	return (
		<a href={`#${id}`} className={`${className} flex flex-col `} id="card">
			<Image
				src={`/${img}`}
				width={150}
				height={150}
				alt="Product Image"
				className="shadow rounded-2xl w-[150px] h-[150px] hover:z-30 sm:hover:w-[300px] sm:hover:h-[300px] sm:w-[250px] sm:h-[250px]"
			/>
			<div className="bg-secondary shadow rounded-2xl p-2 w-3/4 relative bottom-[20%] left-1/2 transform -translate-x-1/2">
				<h4 className="font-semibold text-primaryText text-sm">{title}</h4>
				<p className="text-secondaryText text-sm">{category}</p>
				<p className="text-primaryText text-right">{`${price}₺`}</p>
			</div>
		</a>
	);
}

