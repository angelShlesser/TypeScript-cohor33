import { Link } from "react-router-dom";
import { ClientsPageTitle, ClientsWrapper } from "./styles";
function Clients() {
  return (
    <ClientsWrapper>
      <ClientsPageTitle>Clients</ClientsPageTitle>
      <Link to={"/clients/facebook"}>FaceBook</Link>
      <Link to={"/clients/tesla"}>Tesla</Link>
      <Link to={"/clients/nestle"}>Nestlé</Link>
    </ClientsWrapper>
  );
}

export default Clients;
