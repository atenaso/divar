"use client"

import { useEffect, useState } from 'react';
import styled from "./SearchInput.module.css";
import ProductItem from "./ProductItem";
import { useQuery } from '@tanstack/react-query';

const SearchInput = () => {
    // Access the client
    const getSearchProduct =async () =>{const data = await fetch(`https://dummyjson.com/products/search?q=${searchProduct}`)
  return data;};
    const query = useQuery({ queryKey: ['products'], queryFn:()=> getSearchProduct() })
    const [searchProduct,setSearchProduct]=useState("phone");

console.log(query);


    return (
        <>
        {
          query.isLoading && (<div>isLoading ...</div>)
        }
        <section className={styled.Search}>
        <form action="" className={styled.Searchform}>
                <div className={styled.FormControl}>
                   
                    <input type="text"  
                    placeholder='Search........'
                    autoComplete='off'
                    value={searchProduct}
                    onChange={(e) =>setSearchProduct(e.target.value)}/>
                </div>

        </form>

        </section>
        <div className={styled.Cards}>

        {query.data?.map((Item) => (
          <ProductItem Item={Item} key={Item.id}/>
        ))}
   
   
  </div>
        
        
        
        </>
      );
}
 
export default SearchInput;
