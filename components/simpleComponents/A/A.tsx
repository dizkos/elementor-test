import cn from "classnames";

import styles from "./A.module.css";

interface AProps {
  color?: "darkBlue" | "white";
  size?: "s16" | "s22" | "s14";
  href: string;
  children: React.ReactNode;
  className?: string;
  position?: "center" | "left" | "right";
  decoration?: "none" | "underline";
}

export const A = ({
  color = "darkBlue",
  size = "s16",
  position = "left",
  className,
  children,
  decoration = "none",
  href,
}: AProps) => {
  const rootClassName = cn(
    styles.aCustom,
    styles[color],
    styles[size],
    styles[position],
    styles[decoration],
    className
  );
  return (
    <a className={rootClassName} href={href}>
      {children}
    </a>
  );
};
