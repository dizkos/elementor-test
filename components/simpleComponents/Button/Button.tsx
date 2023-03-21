import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  children,
  color = "orange",
  position = "center",
  className,
}: ButtonProps) => {
  const rootClassName = cn(styles.button, styles[color], className);

  return (
    <div className={styles[position]}>
      <button className={rootClassName}>{children}</button>
    </div>
  );
};
