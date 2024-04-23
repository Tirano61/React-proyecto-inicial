import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  img?: string,
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgShow: string;
  if (img) {
    imgShow = img;
  } else if (product.img) {
    imgShow = product.img;
  } else {
    imgShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgShow}
      alt="Product image"
    />
  )
}