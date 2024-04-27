import { ReactElement } from "react";
import { ProductCardProps } from "../components/ProductCard";





export interface Product {
  id: string,
  title: string,
  img?: string,
}

export interface ProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: Product,
  maxCount?: number,
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: ({className}: {className?:string}) => JSX.Element;
}

export interface onChangeArgs {
  product: Product, 
  count:   number
}

export interface ProductInCart extends Product {
  count: number,
}

export interface InitialValuesProps {
  count?: number,
  maxCount?: number,
}

export interface ProductCartHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,

  increaseBy: ( value: number ) => void,
  reset: () => void,
}