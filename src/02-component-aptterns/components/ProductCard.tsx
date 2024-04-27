import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { InitialValuesProps, Product, ProductCartHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";
import { count } from "console";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  // children?: ReactElement | ReactElement[],
  children: ( args: ProductCartHandlers ) => JSX.Element,
  product: Product,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: InitialValuesProps
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

  const { counter, increaseBy, maxCount, isMaxCountReached,reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  )
}
