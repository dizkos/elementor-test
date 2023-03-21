import React from "react";

import styles from "./BaseIcon.module.css";

export interface BaseIconProps {
  color?: "white" | "gray";
  children?: React.ReactNode;
  href?: string;
}

export const BaseIcon = ({
  color = "gray",
  children,
  href = "#",
}: BaseIconProps) => {
  return (
    <a href={href}>
      <svg
        className={styles[color]}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </a>
  );
};
