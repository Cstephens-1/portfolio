import { useState } from "react"
import styled from "styled-components"
import ContactMenu from "./ContactMenu"

function Contact(){
    //about menu functionality
    const [contactMenuOpen, setContactMenuOpen] = useState(false)

    function toggleContactMenu(){
        setContactMenuOpen(!contactMenuOpen)
        console.log(contactMenuOpen)
    }

    function noContactMenu(){
        return(
            <>
                <ContactButtonStyler onMouseEnter={toggleContactMenu}>Contact</ContactButtonStyler>
            </>
        )
    }

    function showContactMenu(){
        return(
            <>
                <ContactButtonStyler>Contact</ContactButtonStyler>
                <ContactMenu setContactMenuOpen={setContactMenuOpen}/>
            </>
        )
    }

    return(
            <TriangleDown onMouseLeave={()=>{setContactMenuOpen(false)}}>{contactMenuOpen? showContactMenu() : noContactMenu()}</TriangleDown>
        )
}

export default Contact

const TriangleDown = styled.div `
      width: 0;
      height: 0;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-top: 150px solid red;
      border-radius: 50%;
      margin-left: 48.5vw;
      margin-top: 2vh;
      position: relative;
      z-index: 1;
      padding-bottom: 60px;
      background-color: black;
`

const ContactButtonStyler=styled.button`
  background-color: red;
  border-style: none;
  color: white;
  font-size: 18px;
  margin-left: -2.4vw;
  margin-top: -12vh;
  position: absolute;
  font-family: 'Comfortaa', cursive;
  z-index: 2;
  &:hover{
    color: black;
  }
`