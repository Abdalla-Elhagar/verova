import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { Product } from '@/utils/allProducts';



export default function ProductCard({ product }: { product: Product }) {

  return (
        <div style={{ width: "253px", margin: "20px" }}>
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
  );
}
