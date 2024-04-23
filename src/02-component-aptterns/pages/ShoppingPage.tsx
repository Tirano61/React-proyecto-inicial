import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

import "../styles/custom-styles.css";

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
          <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard style={{ backgroundColor: '#92505b' }}
          product={product2} >
          <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons style={{
            display: "flex",
            justifyContent: "end"
          }} />
        </ProductCard>
      </div>
    </div>
  )
}
