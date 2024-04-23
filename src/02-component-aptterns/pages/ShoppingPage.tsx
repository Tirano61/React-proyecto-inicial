import { useState } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const product = {
  id: '1',
  title: 'Coffee - Mug - card',
  img: "./coffee-mug.png"
}
const product2 = {
  id: '2',
  title: 'Coffee - Mug - Meme',
  img: "./coffee-mug2.png"
}

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number,
}

export const ShoppingPage = () => {

  const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = () => {
    console.log('Se llamo la funcion');
  }

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
              onChange={() => onProductCountChange()}
            >
              <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      <div className="shopping-card">
        <ProductCard
          product={product2}
          className="bgDark text-white"
          style={{ width: "100px" }}
          onChange={() => onProductCountChange()} >
          <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          className="bgDark text-white"
          style={{ width: "100px" }}
          product={product} >
          <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  )
}
