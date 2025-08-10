import React from "react";

export default async function FetchingData() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await res.json();

  const productsData = json.data;
  console.log(productsData);
  return <div>FetchingData</div>;
}
