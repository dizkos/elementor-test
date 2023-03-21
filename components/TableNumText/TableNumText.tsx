import styles from "./TableNumText.module.css";

import { Typography } from "../simpleComponents/Typography/Typography";

interface TableNumTextProps {
  num1: string;
  text1: string;

  num2: string;
  text2: string;

  num3: string;
  text3: string;

  num4: string;
  text4: string;
}
export const TableNumText = ({
  num1,
  text1,
  num2,
  text2,
  num3,
  text3,
  num4,
  text4,
}: TableNumTextProps) => {
  return (
    <div className={styles.table}>
      <div>
        <Typography
          color="green"
          size="header"
          position="center"
          lineHeight="lh58"
        >
          {num1}
        </Typography>
        <Typography
          color="dark-blue"
          size="s14"
          position="center"
          lineHeight="lh16"
        >
          {text1}
        </Typography>
      </div>
      <div>
        <Typography
          color="green"
          size="header"
          position="center"
          lineHeight="lh58"
        >
          {num2}
        </Typography>
        <Typography
          color="dark-blue"
          size="s14"
          position="center"
          lineHeight="lh16"
        >
          {text2}
        </Typography>
      </div>
      <div>
        <Typography
          color="green"
          size="header"
          position="center"
          lineHeight="lh58"
        >
          {num3}
        </Typography>
        <Typography
          color="dark-blue"
          size="s14"
          position="center"
          lineHeight="lh16"
        >
          {text3}
        </Typography>
      </div>
      <div>
        <Typography
          color="green"
          size="header"
          position="center"
          lineHeight="lh58"
        >
          {num4}
        </Typography>
        <Typography
          color="dark-blue"
          size="s14"
          position="center"
          lineHeight="lh16"
        >
          {text4}
        </Typography>
      </div>
    </div>
  );
};
