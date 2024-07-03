import Css from "./svgs/css";
import Html from "./svgs/html";
import Javascript from "./svgs/javascript";
import MongoDb from "./svgs/mongodb";
import NextJs from "./svgs/nextjs";
import Scss from "./svgs/scss";
import Styled from "./svgs/styled";
import React from "./svgs/react";
import Typescript from "./svgs/typescript";
import Vue from "./svgs/vue";
import { ToolContainer } from "./technolgies.styled";

interface TechnologiesTypes {
  technologies: string[];
}

interface PortolioItemProps {
  item: string;
}

interface ComponentMap {
  [key: string]: JSX.Element;
}

function PortfolioItem({ item }: PortolioItemProps) {
  const componentMap: ComponentMap = {
    Next: <NextJs />,
    SCSS: <Scss />,
    Styled: <Styled />,
    Mongo: <MongoDb />,
    JavaScript: <Javascript />,
    TypeScript: <Typescript />,
    HTML: <Html />,
    CSS: <Css />,
    React: <React />,
    Vue: <Vue />,
  };

  const selectedComponent = componentMap[item];
  return selectedComponent || null;
}

export default function Technologies({ technologies }: TechnologiesTypes) {
  return technologies.map((tech, index) => (
    <ToolContainer key={index}>
      <div className="icon-svg">
        <PortfolioItem item={tech} />
      </div>

      <div className="text">
        <p>{tech}</p>
      </div>
    </ToolContainer>
  ));
}
