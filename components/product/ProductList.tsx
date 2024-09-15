'use client'

import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/api"
import { Product } from "@/types/Product"
import { useEffect, useState } from "react"
import CustomButton from "../ui/CustomButton"

export default function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const productData = await getProducts();
				setProducts(productData);

			} catch (err) {
				setError('Failed to fetch products.')
			}

		};
		fetchData();
	}, []);

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className="p-5 flex flex-col justify-center items-center">
			<div className="w-full border-b border-b-primary text-primary text-2xl mb-10">
				< p className="px-2" > Ürünlerimize Göz Atın</p >
			</div >
			<div className="flex flex-wrap gap-5 justify-center">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						category={product.category}
						id={product.id}
						img={`products/${product.img}`}
						price={product.price}
					/>
				))}

			</div>
			<CustomButton className="w-2/4 sm:text-xl sm:w-1/5" text={"Tümünü Görüntüle"} />
		</div >
	);
}

