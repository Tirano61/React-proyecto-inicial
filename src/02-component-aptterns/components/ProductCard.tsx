import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { InitialValuesProps, Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  children?: ReactElement | ReactElement[],
  product: Product,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: InitialValuesProps
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });

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
