import { faBluetooth } from "@fortawesome/free-brands-svg-icons"

import styled from "styled-components"

function AboutMenu(){

    return(
      <AboutMenuStyler>
  
          <p>Cory is a Full Stack Software Developer based in NYC.</p>
          <p>After 18 years as a gymnastics coach and program director in New Orleans, Cory was ready for a career change.</p>
          <p>When he isn't coding, Cory enjoys going to the theatre, exploring New York, and going on adventures around the globe with his partner and pup.</p>
        
      
     </AboutMenuStyler>
    )
}

export default AboutMenu


const AboutMenuStyler = styled.h1`

color: cornflowerblue;
  width: 500px;
  margin-top: -30vh; 
  margin-left: 3vw;
  border-radius: 12px;
  font-size: 20px;
  font-family: 'Comfortaa', cursive;
  font-weight: 100
`