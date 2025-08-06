export interface Product {
  id: number;
  imageCover: string;
  title: string;
  description: string;
  price: number;
}
export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
    next: { revalidate: 60 },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.data;
}