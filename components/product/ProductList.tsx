import ProductCard from "./ProductCard"

export default function ProductList() {
	return (
		<div className="container p-5 flex flex-wrap gap-5 justify-center">
			<ProductCard title="Sarap Kadehi Mum" category="Mum" link="#" img="products/sarap.png" price={250} />
			<ProductCard title="Kus Tuyu Yuzuk" category="Aksesuar" link="#" img="products/yuzuk.png" price={150} />
			<ProductCard title="Burgu Asimetrik Kupe" category="Aksesuar" link="#" img="products/kupe.jpeg" price={150} />
			<ProductCard title="Coklu Cicekli Mum" category="Mum" link="#" img="products/mum.jpeg" price={150} />
		</div>
	)
}
