
import { useState } from "react"
import styled from "styled-components"
import AboutMenu from "./AboutMenu"

function About(){

    const [aboutMenuOpen, setAboutMenuOpen] = useState(false)



    // const transition = useSpring({
    //     config: {...config.stiff},
    //     from: {opacity: 0, height: 0, width: 100, color: "white"},
    //     to: {
    //         opacity: 1, height: 800, width: 100, color:"blue"
    //     }
    // })


    
    //about menu functionality
    function toggleAboutMenu(){
        setAboutMenuOpen(!aboutMenuOpen)
        console.log(aboutMenuOpen)
    }

    function noAboutMenu(){
        return(
            <>
                <AboutButtonStyler onMouseEnter={toggleAboutMenu}>About</AboutButtonStyler>
            </>
        )
    }

    function showAboutMenu(){
        return(
            <>
                <AboutButtonStyler onMouseLeave={toggleAboutMenu}>About</AboutButtonStyler>
                <AboutMenu />
            </>
        )
    }

    return(
        <TriangleUp>{aboutMenuOpen? showAboutMenu() : noAboutMenu()}</TriangleUp>
    )
}

export default About

const TriangleUp = styled.div `
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 150px solid red;
  margin-left: 49.5vw;
  border-radius: 50%;
`

const AboutButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 18px;
  margin-top: 10vh;
  margin-left: -2vw;
  font-family: 'Comfortaa', cursive;
  &:hover{
    color: black;
  }
`
