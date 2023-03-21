/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./SocialIcons.module.css";
import cn from "classnames";
import { IconFacebook } from "../simpleComponents/Icons/IconFacebook";
import { IconInsta } from "../simpleComponents/Icons/IconInsta";
import { IconVk } from "../simpleComponents/Icons/IconVk";

interface SocialIconsProps {
  position?: "vertical" | "horizontal";
  color?: "gray" | "white";
  className?: string;
}

export const SocialIcons = ({
  position = "horizontal",
  color,
  className,
}: SocialIconsProps) => {
  const rootClassName = cn(styles.socialIcons, styles[position], className);

  return (
    <div className={rootClassName}>
      <IconFacebook color={color} />
      <IconInsta color={color} />
      <IconVk color={color} />
    </div>
  );
};
