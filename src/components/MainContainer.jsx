import CardListOne from "./CardListOne";
import CardListTwo from "./CardListTwo";
import ContainerFirst from "./ContainerFirst";
import ContainerSecond from "./ContainerSecond";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <div className="blackbg-container">
      <CardListOne/>
      <ContainerFirst/>
      <ContainerSecond/>
      <CardListTwo/>
      <Footer/>
    </div>
  );
}

export default MainContainer;
