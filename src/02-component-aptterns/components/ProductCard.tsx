import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

import { ProductImage, ProductButtons, ProductTitle } from "./";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  children?: ReactElement | ReactElement[],
  product: Product,
  className?: string
}

export const ProductCard = ({ children, product, className }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  )
}
