import MainDesign from "../components/MainDesignSection/MainDesign"
import MainCards from "../components/MainCards/MainCards"
import Billboard from "../components/Billboard/Billboard"
import Title from "../components/Title/Title"
import BillboardTwo from "../components/BillboardTwo/BillboardTwo"

export default function App() {
  return (
    <>
      <Billboard />
      <Title title="Tecnologías" message="La Era Móvil" />
      <MainCards />
      <BillboardTwo />
      <Title title="Diseñado para todos los dispositivos" message="Diseños Creativos" />
      <MainDesign />
    </>
  );
}
