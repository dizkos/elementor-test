export interface ImageProps {
  rounding?:
    | "top-left-80"
    | "top-right-80"
    | "bottom-left-80"
    | "bottom-right-80"
    | "diagonal-80"
    | "top-left-120"
    | "top-right-120"
    | "bottom-left-120"
    | "bottom-right-120"
    | "diagonal-120";
  size: "s" | "m" | "l" | "xl";
  imageUrl?: string;
  className?: string;
  style?: string;
}
