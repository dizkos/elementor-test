/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "../simpleComponents/Typography/Typography";
import styles from "./Ementor.module.css";
import cn from "classnames";

interface EmentorProps {
  color?: "dark-blue" | "white";
  className?: string;
  href?: string;
}

export const Ementor = ({
  color = "dark-blue",
  className,
  href = "#",
}: EmentorProps) => {
  const rootClassName = cn(styles.LogoEmentor, className);
  return (
    <a className={rootClassName} href={href}>
      <div className={styles.logo}>
        <img src="./logo.svg" />
      </div>
      <Typography size="s22" color={color}>
        E-mentor
      </Typography>
    </a>
  );
};
