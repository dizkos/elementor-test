/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageProps } from "./Image.props";
import styles from "./Image.module.css";
import cn from "classnames";

export const Image = ({ rounding, size, imageUrl, className }: ImageProps) => {
  const imgClassName = cn(
    rounding && styles[rounding],
    styles[size],
    className
  );

  return (
    <img className={imgClassName} style={{ backgroundImage: imageUrl }}></img>
  );
};
