import React, { useRef, useState, useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { data, upload, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const productsRef = useRef();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (upload) {
    return (
    <div className="text-center text-[30px] text-white">upload...</div>
    )
  }
  if (error) {
    return (
      <div className="text-center text-[30px] text-white">Error: {error}</div>
    );
  }

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <div
      className="w-[1200px] my-[20px] mx-auto flex flex-wrap gap-[10px]"
      ref={productsRef}
    >
      {products.map((product) => (
        <div
          className="bg-[white] rounded-[20px] w-[300px] mx-auto px-[15px] py-[10px]"
          key={product.id}
        >
          <img
            className="mx-auto w-[100px] h-[100px]"
            src={product.image}
            alt={product.title}
            width="100"
            height="100"
          />
          <strong className="mt-[20px] text-[20px]">{product.category}</strong>
          <strong className="block my-[10px] text-[17px] text-[#AE61FB]">
            Price: ${product.price}
          </strong>
          <span className="block text-[18px]">
            Count: {product.rating.count}
          </span>

          <button
            onClick={() => deleteProduct(product.id)}
            className="bg-[gray] text-[white] w-[200px] block mx-auto text-center py-[5px]  mt-[20px] rounded-[20px] hover:bg-[red] hover:transition-all hover:duration-900 hover:ease-in-out"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
