import styled, {keyframes} from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  // const springProps = useSpring({
  //   transform: 'translateX(100px)',
  //   from: {
  //     transform: 'translateX(0px)', color: "green",
  //   }
  // })

  // const sizes = {
  //   mobileS: '320px',
  //   mobileM: '375px',
  //   mobileL: '425px',
  //   tablet: '768px',
  //   laptop: '1024px',
  //   laptopL: '1440px',
  //   desktop: '2560px',
  // };
  

  // const styles = useSpring({
  //   loop: true,
  //   to: [
  //     { opacity: 1, color: 'green' },
  //     { opacity: .5, color: 'red' },
      
  //   ],
  //   from: { opacity: 1, color: 'red' },
  //   delay: 2000,
  // })

  return (
    <AppWrapper>
      <HeadStyler>Under Construction</HeadStyler>
      <HeadStyler>Please check back soon!</HeadStyler>
        <h1>Cory Stephens</h1>
        <p>Software Developer</p>
      <MenuWrapper>
      <div>
        <About />
        </div>
          <Projects />
          <Skills />
        <div>
        <Contact />
        </div>
      </MenuWrapper>
    </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div`
background-color: black;
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
height: 125vh;
width: 110vw;

`
// const MoveImage = keyframes`
//   0% {width: 100%; height: 100%; margin-top: 20vh;}
//   /* 30%{width: 70%; height: 70%; margin-top: 10vh; margin-right: 80vw; } */
//   /* 60%{width: 30%; height: 30%; margin-top: 2vh; margin-right: 90vw;} */
//   100%{width: 10%; height: 10%; margin-right: 98vw; top: 0; opacity: 30%; }
// `

/* const ImgStyler=styled.h1`
height: 100px;
width: 225;
position: absolute;
margin-left: 48.5vw;
margin-top: -15vh;
background-color: blue;
` */

// const ImgContainer = styled.div`
//   margin-left: 70vw;
//   width: 15%;
//   height: 12%;
//   display: flex;
//   flex-direction: row;
//   position: absolute;
// `

const MenuWrapper = styled.div`
  @media screen and (max-width: 2400px) {
      margin-left: -6vw;
    };
    @media screen and (max-width: 1800px) and (min-width: 800px) {
      margin-left: -6vw;

    };
    @media screen and (max-width: 480px) { 
      margin-left: -6vw;
    };
`
const HeadStyler = styled.header`
  color: red;
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  `