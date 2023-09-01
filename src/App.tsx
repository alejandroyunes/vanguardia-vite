import Header from "./components/Header/Header"
import { MainDesignSection } from "./components/MainDesignSection/MainDesignSection"
import MainColumns from "./components/MainThreeColumns/MainColumns"
import Products from "./components/DesktopProduct/Products"
import Billboard from "./components/Billboard/Billboard"

export default function mainView() {
  return (

    <>
      <Header />
      <Billboard />
      <MainColumns />
      <MainDesignSection />
      <Products />

    </>
  );
}
