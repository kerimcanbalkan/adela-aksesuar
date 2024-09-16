import axios from "axios"
import { Product } from "@/types/Product";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>('db/products.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Unable to fetch products');
  }
}

// Temporary api call
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const products = await getProducts();
    const product = products.find(p => p.id === id) || null;
    return product;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw new Error('Unable to fetch product');
  }
}
