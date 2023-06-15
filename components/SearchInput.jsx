"use client"

import { useEffect, useState } from 'react';
import styled from "./SearchInput.module.css";
import ProductItem from "./ProductItem";


const SearchInput = () => {
    const [searchProduct,setSearchProduct]=useState("phone");
    const [productSelect,setProductSelect]=useState([]);

console.log(productSelect);


    const getSearchProduct = async () => {
        try {
        
          const Res = await fetch(`https://dummyjson.com/products/search?q=${searchProduct}`);
          const JsonObject = await Res.json();
          return JsonObject;
        } catch (error) {
          console.error(error);
        }
      }

      const searchButton= async (e) => {
        try {
          e.preventDefault();
          const data = await getSearchProduct();
          setProductSelect(data);
          setSearchProduct('');
        } catch (error) {
console.error(error)
        }

      }
       
    return (
        <>
        <section className={styled.Search}>
        <form action="" className={styled.Searchform} onSubmit={searchButton} >
                <div className={styled.FormControl}>
                   
                    <input type="text"  
                    placeholder='Search........'
                    autoComplete='off'
                    value={searchProduct}
                    onChange={(e) =>setSearchProduct(e.target.value)}/>

                    <button type='submit'
                    onClick={searchButton}
                    >Search</button>
                </div>

        </form>

        </section>
        <div className={styled.Cards}>
     {
      productSelect.map((Item) => (
        <ProductItem key={Item.id}
        Item={Item}
        
       />
      ))
     } 
   
   
  </div>
        
        
        
        </>
      );
}
 
export default SearchInput;
