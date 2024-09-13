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
