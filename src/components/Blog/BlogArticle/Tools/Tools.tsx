import Html from "./svgs/html"
import Javascript from "./svgs/javascript"
import Linux from "./svgs/linux"
import NodeJS from "./svgs/node"
import Systems from "./svgs/systems"
import Windows from "./svgs/windows"
import { ToolContainer } from "./tools.styled"

interface ToolsTypes {
  tools: string[] | undefined
}

interface ComponentMap {
  [key: string]: JSX.Element;
}

interface PortolioItemProps {
  tool: string
}

function ToolsItem({ tool }: PortolioItemProps) {

  const componentMap: ComponentMap = {
    Linux: <Linux />,
    Windows: <Windows />,
    Systems: <Systems />,
    HTML: <Html />,
    JavaScript: <Javascript />,
    Node: <NodeJS />
  }

  const selectedComponent = componentMap[tool]
  return selectedComponent || null

}

export default function Tools({ tools }: ToolsTypes) {

  return (
    tools?.map((tool, index) => (

      <ToolContainer key={index}>

        <div className="icon-svg">
          <ToolsItem tool={tool} arial-label="svg icon"/>
        </div>

        <div className="text">
          <p>
            {tool}
          </p>

        </div>

      </ToolContainer>
    ))
  )
}