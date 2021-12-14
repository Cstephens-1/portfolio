import styled from "styled-components"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faGem, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faTrain} from '@fortawesome/free-solid-svg-icons'
import {faJs} from "@fortawesome/free-brands-svg-icons"
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import {faCss3} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'
// import myFile from "./static/my-file.pdf"

function SkillsMenu(){
    return(
        <SkillsMenuStyler>
            <UlStyler>
                    
                    <FontAwesomeIcon icon={faReact} /><LiStyler> React</LiStyler>
                    <FontAwesomeIcon icon={faGem} /><LiStyler>Ruby</LiStyler>
                    <FontAwesomeIcon icon={faTrain} /><LiStyler>Rails</LiStyler>
                    <FontAwesomeIcon icon={faJs} /><LiStyler>Javascript</LiStyler>
                    <FontAwesomeIcon icon={faHtml5} /><LiStyler>HTML</LiStyler>
                    <FontAwesomeIcon icon={faCss3} /><LiStyler>CSS</LiStyler>
                    </UlStyler>
                    <UlStyler>
                    <FontAwesomeIcon icon={faUsers} /><LiStyler>Team Management</LiStyler>
                    <FontAwesomeIcon icon={faHandshake} /><LiStyler>Conflict Resolution</LiStyler>
                    <FontAwesomeIcon icon={faBullseye} /> <LiStyler>Goal Planning</LiStyler>
                    </UlStyler>






        </SkillsMenuStyler>
    )
}

export default SkillsMenu

const SkillsMenuStyler = styled.h1`
  background-color: black;
  display: flex;
  flex-direction: row;
  /* height: 700px; */
  width: 600px;
  margin-top: -25vh; 
  border-radius: 12px;
  position: relative;
`

const UlStyler = styled.ul`
  color: cornflowerblue;
`

const LiStyler = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  font-size: 20px;
  font-family: 'Comfortaa', cursive;
  font-size: 25px;
  /* margin-left: 10px; */
  font-weight: 100;
`