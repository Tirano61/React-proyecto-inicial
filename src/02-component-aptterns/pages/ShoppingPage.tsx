import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

import  "../styles/custom-styles.css";

const product = {
  id: '1',
  title: 'Coffee - Mug - card',
  img: "./coffee-mug.png"
}
const product2 = {
  id: '2',
  title: 'Coffee with Milk',
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
          className="bgDark text-white"
          product={product2} >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons"/>

        </ProductCard>
      </div>
    </div>
  )
}
