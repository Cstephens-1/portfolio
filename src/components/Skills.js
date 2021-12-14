import { useState } from "react"
import styled from "styled-components"
import SkillsMenu from "./SkillsMenu"

function Skills(){

    const [skillsMenuOpen, setSkillsMenuOpen] = useState(false)

    function toggleSkillsMenu(){
        setSkillsMenuOpen(!skillsMenuOpen)
        console.log(skillsMenuOpen)
    }

    function noSkillsMenu(){
        return(
            <SkillsButtonStyler onMouseEnter={toggleSkillsMenu}>Skills</SkillsButtonStyler>
        )
        
    }

    function showSkillsMenu(){
        return(
            <>
            <SkillsButtonStyler onMouseLeave={toggleSkillsMenu}>Skills</SkillsButtonStyler>
            <SkillsMenu />
            </>
        )
        
    }



    return(
        <TriangleRight>{skillsMenuOpen? showSkillsMenu() : noSkillsMenu()}</TriangleRight>
    )
}

export default Skills

const TriangleRight= styled.div`
width: 0;
      height: 0;
      border-top: 100px solid transparent;
      border-left: 150px solid red;
      border-bottom: 100px solid transparent;
      margin-left: 63vw;
      margin-top: -13vw;
      border-radius: 50%;
      position: absolute;
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