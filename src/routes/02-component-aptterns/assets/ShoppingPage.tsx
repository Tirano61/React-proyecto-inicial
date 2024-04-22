import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

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
    <div >
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

        <ProductCard product={product2} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />

        </ProductCard>
      </div>
    </div>
  )
}
