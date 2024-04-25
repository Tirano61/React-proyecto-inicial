import { useState } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";






export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (

            <ProductCard
              key={product.id}
              className="bgDark text-white"
              product={product}
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      <div className="shopping-card">
       
        {
          Object.entries(shoppingCart).map( ([key, product]) =>(
            <ProductCard
              key={ key }
              product={product}
              className="bgDark text-white"
              style={{ width: "100px" }}
              // onChange={ onProductCountChange }
              value={ product.count } 
            >
              <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductButtons 
                className="custom-buttons" 
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
          ))
          
        }

      </div>
    </div>
  )
}
