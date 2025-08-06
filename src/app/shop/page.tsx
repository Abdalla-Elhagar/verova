import React from 'react';
import ProductCard from '@/components/productCard';
import { fetchAllProducts } from '@/utils/allProducts';
  export interface Product {
  id: number;
  imageCover: string;
  title: string;
  description: string;
  price: number;
}
let products: Product[] = [];

export default async function Shop() {
  

  try {
    products = await fetchAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <div>Shop</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center">
      {
        products.length > 0 ? products.map((product) =>
            <ProductCard key={product.id} product={product} />
         ) :<div>No products found.</div>
      }
 </div>
    </>
  );
}
