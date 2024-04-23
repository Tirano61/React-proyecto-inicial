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
  className?: string,
  style?: React.CSSProperties,
  onChange?: () => void,
}

export const ProductCard = ({ children, product, className, style, onChange }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct(onChange);

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}
