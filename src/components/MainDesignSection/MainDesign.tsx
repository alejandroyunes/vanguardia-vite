import Search from './Assets/svgs/search.svg'
import Share from './Assets/svgs/share.svg'

import { MainDesignContainer } from "./main-design.styled"
import Http from "./Assets/svgs/http.svg"
import Security from './Assets/svgs/security.svg'
import Auth from './Assets/svgs/authentication.svg'

interface mainDesignTypes {
  altImageOne: string
  altImageTwo: string
  altImageThree: string
  altImageFour: string
  altImageFive: string
}

export default function MainDesign(props: mainDesignTypes) {
  return (
    <MainDesignContainer>
      <div className="image-one">
        <img src={Http} alt={props.altImageOne} />
      </div>
      <div className="image-two">
        <img src={Share} alt={props.altImageTwo} />
      </div>
      <div className="image-three">
        <img src={Security} alt={props.altImageThree} />
      </div>
      <div className="image-four">
        <img src={Search} alt={props.altImageFour} />
      </div>
      <div className="image-five">
        <img src={Auth} alt={props.altImageFive} />
      </div>
    </MainDesignContainer>
  )
}
