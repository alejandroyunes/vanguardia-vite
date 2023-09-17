import { MainDesignSection } from "../components/MainDesignSection/MainDesignSection"
import MainColumns from "../components/MainThreeColumns/MainColumns"
import Billboard from "../components/Billboard/Billboard"
import Title from "../components/Title/Title"
import BillboardTwo from "../components/BillboardTwo/BillboardTwo"

export default function index() {
  return (
    <>
      <Billboard />
      <Title title="Tecnologías" message="La Era Móvil" />
      <MainColumns />
      <BillboardTwo />
      <Title title="Diseñado para todos los dispositivos" message="Diseños Creativos" />
      <MainDesignSection />
    </>
  );
}
