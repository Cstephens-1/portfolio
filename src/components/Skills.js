import { useState } from "react"
import styled, { keyframes } from "styled-components"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faGem, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faTrain} from '@fortawesome/free-solid-svg-icons'
import {faJs} from "@fortawesome/free-brands-svg-icons"
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import {faCss3} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'

function Skills(){
    const [skillsMenuOpen, setSkillsMenuOpen] = useState(false)

//skills menu functionality
function toggleSkillsMenu(){
    setSkillsMenuOpen(!skillsMenuOpen)
    console.log(skillsMenuOpen)
  }

  function noSkillsMenu(){
    return(
      <>
       <SkillsButtonStyler onMouseEnter={toggleSkillsMenu}>Skills</SkillsButtonStyler>
      </>
    )
  }

  function showSkillsMenu(){
    return(
      <>
       <SkillsButtonStyler onMouseLeave={toggleSkillsMenu}>Skills</SkillsButtonStyler>
       <SkillsMenu>
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
          <h5>Resume</h5>
        </UlStyler>
       
       
       
       </SkillsMenu>
      </>
    )
  }



    return(
        <TriangleRight>{skillsMenuOpen? showSkillsMenu() : noSkillsMenu()}</TriangleRight>
    )
}

export default Skills

const TriangleRight = styled.div `
    width: 0;
      height: 0;
      border-top: 100px solid transparent;
      border-left: 150px solid red;
      border-bottom: 100px solid transparent;
      margin-left: 59vw;
      margin-top: -22vw;
      border-radius: 50%;
      position: relative;
      z-index: 1;
      padding-right: 60px;
      background-color: black;
`

const SkillsButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 18px;
  margin-left: -7vw;
  margin-top: -1vh;
  position: absolute;
  font-family: 'Comfortaa', cursive;
  z-index: 2;
  &:hover{
    color:black
  }
`

const SkillsMenu = styled.h1`
  background-color: black;
  display: flex;
  flex-direction: row;
  /* height: 700px; */
  width: 600px;
  margin-top: -25vh; 
  border-radius: 12px;
  position: relative;
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

const UlStyler = styled.ul`
  color: cornflowerblue;
`

