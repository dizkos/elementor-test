import { Image } from "@/components/simpleComponents/Image/Image";
import { Button } from "@/components/simpleComponents/Button/Button";
import { Typography } from "@/components/simpleComponents/Typography/Typography";
import { TableNumText } from "@/components/TableNumText/TableNumText";
import { TableCourses } from "@/components/TableCourses/TableCourses";
import { Ementor } from "@/components/Ementor/Ementor";
import { Footer } from "@/components/generalComponents/Footer/Footet";
import { SocialIcons } from "@/components/SocialIcons/SocialIcons";
import { A } from "@/components/simpleComponents/A/A";

export default function cources() {
  return (
    <>
      {/*Меню навигации - Header*/}

      <header className="header">
        <nav>
          <ul className="mainMenu">
            <li className="pointMenu">О нас</li>
            <li className="pointMenu">Платформа</li>
            <li className="pointMenu">Курсы</li>
            <li className="pointMenu">Лекции</li>
            <li className="pointMenu">Тарифы</li>
            <li className="pointMenu">Блог</li>
            <li className="pointMenu">Контакты</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
