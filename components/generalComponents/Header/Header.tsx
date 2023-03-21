import { Ementor } from "@/components/Ementor/Ementor";
import { A } from "@/components/simpleComponents/A/A";

import styles from "./Header.module.css";

interface HeaderProps {
  pageTheme: "general" | "simple";
}

type Header = "general" | "simple";
export const Header = ({ pageTheme = "general" }: HeaderProps) => {
  return { pageTheme: any == "general" ? <div>da</div> : <div>net</div> };
};

//  {
//    pageTheme == "general" ? (
//      <header>
//        <nav className={styles.headerGeneral}>
//          <div className={styles.mainMenu}>
//            <A href="#">О нас</A>
//            <A href="#">Платформа</A>
//            <A href="./cources.tsx">Курсы</A>
//            <A href="#">Лекции</A>
//            <A href="#">Тарифы</A>
//            <A href="#">Блог</A>
//            <A href="#">Контакты</A>
//          </div>
//        </nav>
//      </header>
//    ) : (
//      <header>
//        <nav className={styles.headerSimple}>
//          <div>
//            <Ementor />
//          </div>
//          <div className={styles.mainMenu}>
//            <A href="#">О нас</A>
//            <A href="#">Платформа</A>
//            <A href="./cources.tsx">Курсы</A>
//            <A href="#">Лекции</A>
//            <A href="#">Тарифы</A>
//            <A href="#">Блог</A>
//            <A href="#">Контакты</A>
//          </div>
//        </nav>
//      </header>
//    ),
//  };
//)
