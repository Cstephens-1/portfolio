import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {BrowserRouter} from "react-router-dom"




function ContactMenu({setContactMenuOpen}){


    function closeContactMenu(){
        setContactMenuOpen(true)
    }


    // function clickGithub(){
    //     alert("github clicked")
    // }

    return(
        <BrowserRouter>
            <ContactMenuStyler onMouseLeave={closeContactMenu}>
                <ContactButtonStyler>
                    <ButtonContainerStyler>
                        <FontAwesomeIcon icon={faEnvelopeOpen} />  
                        <ButtonStyler>corystephens012@gmail.com</ButtonStyler>
                    </ButtonContainerStyler>
                    <ButtonContainerStyler>
                        <FontAwesomeIcon icon={faPhone} />
                        <ButtonStyler>985.373.6687</ButtonStyler>
                    </ButtonContainerStyler>
                    <br></br>
                    <ButtonContainerStyler>
                    <ButtonStyler><FontAwesomeIcon icon={faLinkedin} /></ButtonStyler>
                    <ButtonStyler><FontAwesomeIcon icon={faGithub} /></ButtonStyler>
                    </ButtonContainerStyler>
                </ContactButtonStyler>
            </ContactMenuStyler>
            </BrowserRouter>
    )
}

export default ContactMenu

const ContactMenuStyler = styled.div`
  background-color: black;
  height: 50px;
  width:800px;
  margin-top:-2vh; 
  margin-left: -25vw;
  border-radius: 12px;
  color: black;
  text-align: center;
`

const ContactButtonStyler=styled.div`
    color: white;
    margin-top: 2vh;
    padding-top: 3vh;
    display: flex;
    flex-direction: column;
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

const ButtonContainerStyler= styled.div`
    font-size: 30px;
    background-color: black;
    color: cornflowerblue;
`