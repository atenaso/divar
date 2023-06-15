
import styled from "./ProductItem.module.css";

/**
 * 
 * @param {Item:{
 * images: string[];
 * title:string;
 * brand:string;
 * price:number;
 * stock:number}} param0 
 * @returns 
 */

function ProductItem ({Item}) {
console.log(Item);
    return (
        <div className={styled.CardBox}>
      <img className={styled.cardImage} src={Item.images[0]} alt="testAlt" />

      <div className={styled.CardContent}>
        <div className={styled.CardTitle}>
          <h2>{Item.title}</h2>
        </div>
        <div className={styled.CardBrand}>
          <span>{Item.brand}</span>
        </div>
        <div className={styled.CardPrice}>
          <span>{Item.price}</span>
        </div>
        <div className={styled.CardStock} >
          <span>{Item.stock}</span>
        </div>
      </div>
    </div>
      );
}

export default ProductItem;