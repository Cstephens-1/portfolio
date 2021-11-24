import { useState } from "react"
import styled from "styled-components"
import ProjectsMenu from "./ProjectsMenu"

function Projects(){

    const [projectsMenuOpen, setProjectsMenuOpen] = useState(false)

    //skills menu functionality
    function toggleProjectsMenu(){
        setProjectsMenuOpen(!projectsMenuOpen)
        console.log(projectsMenuOpen)
      }
    
      function noProjectsMenu(){
        return(
          <>
           <ProjectsButtonStyler onMouseEnter={toggleProjectsMenu}>Projects</ProjectsButtonStyler>
          </>
        )
      }
    
      function showProjectsMenu(){
        return(
          <>
           <ProjectsButtonStyler>Go away</ProjectsButtonStyler>
           <ProjectsMenu setProjectsMenuOpen={setProjectsMenuOpen}/>
          </>
        )
      }






    return(
        <TriangleLeft onMouseLeave={()=>{setProjectsMenuOpen(false)}}>{projectsMenuOpen? showProjectsMenu() : noProjectsMenu()}</TriangleLeft>
    )
}

export default Projects

const TriangleLeft = styled.div `
    width: 0;
    height: 0;

    border-top: 100px solid transparent;
    border-right: 150px solid;
    border-right-color: red;
    border-bottom: 100px solid transparent;
    margin-left: 37vw;
    margin-top: 0vh;
    border-radius: 50%;
    padding-left: 60px
`

const ProjectsButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 18px;
  margin-left: 2vw;
  margin-top: -1vh;
  position: absolute;
  font-family: 'Comfortaa', cursive;
  z-index: 2;
  &:hover{
    color: black;
  }
`

// const ProjectsMenu = styled.h1`
//   background-color: white;
//   height: 800px;
//   width: 500px;
//   margin-top: -35vh; 
//   margin-left: -30vw;
//   border-radius: 15px;
// `