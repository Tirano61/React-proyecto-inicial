
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {

  

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
        <ProductCard
          key={product.id}
          className="bgDark text-white"
          product={product}
          initialValues={{
            count: 6,
            maxCount: 22,
          }}
        >
          {
            ({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
              <>
                <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                <ProductTitle className="text-white" />
                <ProductButtons className="custom-buttons" />
               
               <button onClick={reset}>Reset</button>
               <button onClick={() => increaseBy(-2) }>-2</button>
               {/* si no se llega al isMaxCount ocultar */}
               {  
                  (!isMaxCountReached) && <button onClick={ () => increaseBy(2) }>+2</button>
               }
               <span>  count: { `  ${count} de ${ maxCount }` }</span>
              </>
            )
          }
          
        </ProductCard>
    </div>
  )
}
