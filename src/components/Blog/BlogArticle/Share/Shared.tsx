import Twitter from "./svgs/twitter"
import { ShareContainer } from "./shared.styled"
import Facebook from "./svgs/facebook";
import Linkedin from "./svgs/linkedin";

interface ShareTypes {
  icons: string[] | undefined
}

interface ComponentMap {
  [key: string]: JSX.Element;
}

interface PortolioItemProps {
  tool: string
}

function SharedItem({ tool }: PortolioItemProps) {

  const componentMap: ComponentMap = {
    Twitter: <Twitter />,
    Facebook: <Facebook />,
    LinkedIn: <Linkedin />,
  }

  const selectedComponent = componentMap[tool]
  return selectedComponent || null

}

export default function Share({ icons }: ShareTypes) {

  return (
    icons?.map((icon, index) => (

      <ShareContainer key={index}>

        <div className="icon-svg">
          <SharedItem tool={icon} arial-label="svg icon"/>
        </div>

        <div className="text">
          <p>
            {icon}
          </p>

        </div>

      </ShareContainer>
    ))
  )
}