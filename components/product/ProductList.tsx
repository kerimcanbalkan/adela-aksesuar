'use client'

import ProductCard from "./ProductCard"
import { getProducts } from "@/lib/api"
import { Product } from "@/types/Product"
import { useEffect, useState } from "react"

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
		<div className="container p-5 flex flex-wrap gap-5 justify-center">
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
	);
}

