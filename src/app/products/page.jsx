"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import ProductItem from "../../../components/ProductItem";
import { sampleImageUrl } from "../Constants";
import styled from "./ProductCard.module.css"
import { useEffect, useState } from "react";
import SearchInput from "../../../components/SearchInput";


const queryClient = new QueryClient()


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

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <SearchInput  />

  </QueryClientProvider>
  </>
  );
}

export default ProductCard;
