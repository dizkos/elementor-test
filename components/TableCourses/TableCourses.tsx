/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./TableCourses.module.css";

import { Typography } from "../simpleComponents/Typography/Typography";

export interface TableCousesProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
}
export const TableCourses = ({
  text1,
  text2,
  text3,
  text4,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
}: TableCousesProps) => {
  return (
    <div className={styles.tableCourses}>
      <div className={styles.card}>
        <img
          width={230}
          height={155}
          style={{ backgroundImage: imageUrl1 }}
        ></img>
        <Typography color="dark-blue" size="s14" lineHeight="lh16">
          {text1}
        </Typography>
      </div>
      <div className={styles.card}>
        <img
          width={230}
          height={155}
          style={{ backgroundImage: imageUrl2 }}
        ></img>
        <Typography color="dark-blue" size="s14" lineHeight="lh16">
          {text2}
        </Typography>
      </div>
      <div className={styles.card}>
        <img
          width={230}
          height={155}
          style={{ backgroundImage: imageUrl3 }}
        ></img>
        <Typography color="dark-blue" size="s14" lineHeight="lh16">
          {text3}
        </Typography>
      </div>
      <div className={styles.card}>
        <img
          width={230}
          height={155}
          style={{ backgroundImage: imageUrl4 }}
        ></img>
        <Typography color="dark-blue" size="s14" lineHeight="lh16">
          {text4}
        </Typography>
      </div>
    </div>
  );
};
