import { TypographyProps } from "./Typography.props";
import cn from "classnames";

import styles from "./Typography.module.css";

export const Typography = ({
  color = "dark-blue",
  children,
  className,
  position = "left",
  size = "s16",
  lineHeight = "lh24",
}: TypographyProps) => {
  const rootClassName = cn(
    styles.typography,
    styles[color],
    styles[position],
    styles[size],
    styles[lineHeight],
    className
  );
  return <p className={rootClassName}>{children}</p>;
};
