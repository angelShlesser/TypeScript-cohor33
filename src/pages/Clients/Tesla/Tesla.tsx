import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ClientsWrapper,
  ClientsPageTitle,
  ButtonControl,
  ClientsPageParagraph,
} from "../styles";
import Button from "components/Button/Button";
function Tesla() {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate("/clients");
  };
  useEffect(() => {
    return () => console.log("Component Users unmounted");
  }, []);
  return (
    <ClientsWrapper>
      <ClientsPageTitle>Tesla</ClientsPageTitle>
      <ClientsPageParagraph>
        Tesla, «Тесла» — американская компания, производитель электромобилей и
        решений (см. SolarCity) для хранения электроэнергии.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Компания была основана в июле 2003 года Мартином Эберхардом[en] и Марком
        Тарпеннингом, но нынешнее руководство компании называет сооснователями
        Илона Маска, Джеффри Брайана Страубела и Иэна Райта.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        В 2019 году Tesla стала крупнейшим производителем электромобилей в мире.
        Седан Tesla Model 3 стал самым продаваемым электромобилем в истории,
        преодолев отметку 800 тысяч.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        В списке крупнейших публичных компаний в мире Forbes Global 2000 за 2022
        год Tesla заняла 151-е место. В списке крупнейших компаний США по
        размеру выручки Fortune 500 заняла 65-е место. В 2021 году Tesla вышла
        на первое место по рыночной капитализации среди автомобильных компаний,
        обойдя японского автопроизводителя Toyota. На середину 2023 года
        капитализация составила 820 миллиарда долларов.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Компания получила название в честь американского инженера, изобретателя
        в области электротехники Николы Теслы.
      </ClientsPageParagraph>
      <ButtonControl>
        <Button name="Go to page" onClick={goToPage} />
      </ButtonControl>
    </ClientsWrapper>
  );
}
export default Tesla;
