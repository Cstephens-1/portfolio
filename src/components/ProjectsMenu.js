import styled from "styled-components"
import {BrowserRouter, Link} from "react-router-dom"
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ProjectsMenu({setProjectsMenuOpen}){

function closeProjectMenu(){
    setProjectsMenuOpen(true)
}


    return(
        <>
        <ProjectsMenuStyler onMouseLeave={closeProjectMenu}>
                <BrowserRouter>
            <div>
                <Link to="/github.com">Coachable</Link>
                <ButtonStyler><FontAwesomeIcon icon={faYoutube} /></ButtonStyler>
                <ButtonStyler><FontAwesomeIcon icon={faGithub} /></ButtonStyler>
            </div>
            <div>
            <Link to="/github.com">PoolBoy</Link>
            <ButtonStyler><FontAwesomeIcon icon={faYoutube} /></ButtonStyler>
                <ButtonStyler><FontAwesomeIcon icon={faGithub} /></ButtonStyler>
            </div>
            <div>
            <Link to="/github.com">Socialite</Link>
            <ButtonStyler><FontAwesomeIcon icon={faYoutube} /></ButtonStyler>
                <ButtonStyler><FontAwesomeIcon icon={faGithub} /></ButtonStyler>
            </div>
                </BrowserRouter>
        </ProjectsMenuStyler>
        </>
    )
}

export default ProjectsMenu

const ProjectsMenuStyler = styled.h1`

  width: 500px;
  margin-top: -6vh; 
  margin-left: -26vw;
  border-radius: 15px;
`

const ButtonStyler=styled.button`
    border-style: none;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 30px;
    background-color: black;
    color: cornflowerblue;
    font-family: 'Comfortaa', cursive;
`