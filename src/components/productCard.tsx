import React from 'react';
import { BsHandbag } from 'react-icons/bs';

export interface Product {
  id: number;
  imageCover: string;
  title: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center">
      {products.map((product) => (
        <div key={product.id} style={{ width: "253px", margin: "20px" }}>
          <img
            src={product.imageCover}
            alt={product.title}
            width={"253px"}
            height={"278px"}
            style={{ borderRadius: '30px', border: '1px solid black' }}
          />
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{product.title.slice(0, 20)}</h2>
            <BsHandbag style={{ fontSize: "28px" }} />
          </div>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}
