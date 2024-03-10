import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ClientsWrapper,
  ClientsPageTitle,
  ButtonControl,
  ClientsPageParagraph,
} from "../styles";
import Button from "components/Button/Button";
function Nestle() {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate("/clients");
  };
  useEffect(() => {
    return () => console.log("Component Users unmounted");
  }, []);
  return (
    <ClientsWrapper>
      <ClientsPageTitle>Nestlé</ClientsPageTitle>
      <ClientsPageParagraph>
        Nestlé S.A. (полное название — Nestlé Société Anonyme, в русской
        транслитерации — «Нестле С. А.», «акционерное общество Нестле́») —
        швейцарская транснациональная корпорация, крупнейший в мире
        производитель продуктов питания. Штаб-квартира компании находится в
        швейцарском городе Веве (фр. Vevey).
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Nestlé производит растворимый кофе, минеральную воду, шоколад,
        мороженое, бульоны, молочные продукты, детское питание, корм для
        домашних животных. Основные торговые марки — KitKat, Maggi, Nescafe,
        Nesquik, Nestea, Friskies, Purina. Владеет 20 % акций косметической
        компании L’Oréal. Основным рынком сбыта продукции являются США, на них
        приходится немногим менее трети оборота компании.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Компания была объектом различных споров, критики и бойкотов по поводу её
        маркетинга детской смеси в качестве альтернативы грудному вскармливанию
        в развивающихся странах, использования детского труда при производстве
        какао, а также производства и продвижения воды в бутылках.
      </ClientsPageParagraph>
      <ButtonControl>
        <Button name="Go to page" onClick={goToPage} />
      </ButtonControl>
    </ClientsWrapper>
  );
}
export default Nestle;
