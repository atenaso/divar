"use client";
import ProductItem from "../../../components/ProductItem";
import { sampleImageUrl } from "../Constants";
import styled from "./ProductCard.module.css"
import { useEffect, useState } from "react";
import SearchInput from "../../../components/SearchInput";

const getProducts = async () => {
  try {
  
    const Res = await fetch("https://dummyjson.com/products");
    const JsonObject = await Res.json();
    return JsonObject;

  } catch (error) {
    console.error(error);
  }
};




function ProductCard() {
  const [ImageUrl, setImageUrl] = useState(sampleImageUrl);
  const [Product, setProduct] = useState([]);




  useEffect(async () => {
    try {
      const data = await getProducts();
      setProduct( data.products);
     
    } catch (error) {
      console.log(error)
    }
   
  }, []);

  return (
    <>
    <SearchInput  />
    <div className={styled.Cards}>
     {
      Product.map((Item) => (
        <ProductItem key={Item.id}
        Item={Item}
       />
      ))
      
      }
   
  </div>
  </>
  );
}

export default ProductCard;
