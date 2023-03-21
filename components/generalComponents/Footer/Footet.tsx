import { Ementor } from "../../Ementor/Ementor";
import { SocialIcons } from "../../SocialIcons/SocialIcons";
import { Typography } from "../../simpleComponents/Typography/Typography";
import { A } from "@/components/simpleComponents/A/A";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerTable}>
          <div className={styles.footerFirstColumn}>
            <Ementor />
            <Typography size="s14" lineHeight="lh18" className={styles.typo}>
              Образовательная онлайн-платформа для развития и тренировки навыков
              в сфере информационных технологий
            </Typography>
            <SocialIcons color="gray" />
          </div>
          <div className={styles.footerBasicColumn}>
            <A href="#">Обучение</A>
            <A href="#">Курсы</A>
            <A href="#">Вебинары</A>
            <A href="#">Тренажеры</A>
            <A href="#">Воркшопы</A>
          </div>
          <div className={styles.footerBasicColumn}>
            <A href="#">О нас</A>
            <A href="#">О платформе</A>
            <A href="#">Преподаватели</A>
            <A href="#">Тарифы</A>
            <A href="#">Отзывы</A>
          </div>
          <div className={styles.footerBasicColumn}>
            <A href="#">Контакты</A>
            <A href="#">Связаться с нами</A>
            <A href="#">Консультация</A>
            <A href="#">Реквизиты</A>
            <A href="#">Поддержка</A>
          </div>
          <div className={styles.footerLastColumn}>
            <Typography lineHeight="lh16">Возникли вопросы?</Typography>
            <Typography lineHeight="lh16">Напишите нам на почту </Typography>
            <A href="#" decoration="underline">
              education@ementor.info
            </A>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.headerDowner}>
          <A href="#" size="s14">
            E-Mentor © 2021 Все права защищены
          </A>

          <div className={styles.downerRight}>
            <A href="#" size="s14">
              Политика обработки персональных данных
            </A>
            <A href="#" size="s14">
              Публичная оферта
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
};
