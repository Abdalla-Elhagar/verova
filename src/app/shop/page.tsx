import React from 'react';
import ProductCard from '@/components/productCard';
import { fetchAllProducts, Product } from '@/utils/allProducts';

export default async function Shop() {
  let products: Product[] = [];

  try {
    products = await fetchAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <div>Shop</div>
      <ProductCard products={products} />
    </>
  );
}
