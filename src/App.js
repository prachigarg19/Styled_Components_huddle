
import './App.css';
import Navbar from './Components/Navbar';
import {ThemeProvider} from 'styled-components';
import { Flex } from './Components/styled/Flex';
import { Content } from './Components/styled/Content';
import Buttoncom from './Components/Buttoncom';
// import Mockup from './images/illustration-mockups.svg';
import { Image } from './Components/styled/Image';
import { content} from './Boxcontent.js'
import Card from './Components/Card';
import Footer from './Components/Footer';
const theme={
 
  colors:{
      header:'hsl(193, 100%, 96%)',
      pinkbutton:'hsl(322, 100%, 66%)'
  },
  fonts:{
    fontSource:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap',
    fontFamily1: 'Open Sans', 
    fontFamily2: 'Poppins',
  },
  mobile:{
      query:'768px'
  }
}
function App() {
  
  // const flexdecide=(num)=>{
     
  // }
  return (
   <>
   <ThemeProvider theme={theme} style="margin:0;padding:0; width:100vw;">
      <Navbar/>
      <Flex color={({theme})=>theme.colors.header}>
        <Content> 
          {/* content is row flex */}
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle reimagines the way we build communitites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions. </p>
            <Buttoncom bg={theme.colors.pinkbutton} text="Get Started For Free" color="white" padding="1rem 3rem" box="0"/>
        </Content>
        <div>
        <img src={require("./images/illustration-mockups.png")} width="60%"/>
        </div>
      </Flex>
      {content.map((item)=>(
          <Card id={item.id} title={item.title} body={item.body} image={item.image}/> 
      ))}
      {/* */}
      <Footer/>
    </ThemeProvider>
   </>
  );
}

export default App;
