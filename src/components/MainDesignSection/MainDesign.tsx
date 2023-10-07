import Search from './Assets/svgs/search.svg'
import Share from './Assets/svgs/share.svg'

import { MainDesignContainer } from "./main-design.styled"
import Http from "./Assets/svgs/http.svg"
import Security from './Assets/svgs/security.svg'
import Auth from './Assets/svgs/authentication.svg'

export default function MainDesign() {
  return (
    <MainDesignContainer>
      <div className="image-one">
        <img src={Http} alt="" />
      </div>
      <div className="image-two">
        <img src={Share} alt="" />
      </div>
      <div className="image-three">
        <img src={Security} alt="" />
      </div>
      <div className="image-four">
        <img src={Search} alt="" />
      </div>
      <div className="image-five">
        <img src={Auth} alt="" />
      </div>
    </MainDesignContainer>
  )
}
