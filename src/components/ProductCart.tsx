import React, { use, useEffect, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
interface Product {
  id: number;
  imageCover: string;
  title: string;
  description: string;
  price: number;
}


export default function ProductCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('https://ecommerce.routemisr.com/api/v1/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.data || []);
        console.log('Updated products:', data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 justify-items-center'>
        {products.map((product) => (
          <div key={product.id} style={{ width:"253px" , margin: "20px" }}>
            <img
              src={product.imageCover}
              alt={product.title}
              width={"253px"}
              height={"278px"}
              style={{ borderRadius: '30px' , border: '1px solid black' }}
                />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{product.title.slice(0, 20)}</h2>
            <BsHandbag style={{ fontSize: "28px" }} />
            </div>
            <p>{product.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
}