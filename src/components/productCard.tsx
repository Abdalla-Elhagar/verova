import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { Product } from '@/utils/allProducts';
import Image from 'next/image';
export default function ProductCard({ product }: { product: Product }) {

  return (
        <div style={{ width: "253px", margin: "20px" }}>
          <Image
            src={product.imageCover}
            alt={product.title}
            width={253}
            height={278}                          
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
