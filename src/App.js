
import './App.css';
import Navbar from './Components/Navbar';
import {ThemeProvider} from 'styled-components';
import { Flex } from './Components/styled/Flex';
import { Content } from './Components/styled/Content';
import Mockup from './images/illustration-mockups.svg';

const theme={
 
  colors:{
      header:'hsl(193, 100%, 96%)',
      
  },
  fonts:{
    fontSource:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap',
    fontFamily1: 'Open Sans', 
    fontFamily2: 'Poppins',
  }
}
function App() {

  return (
   <>
   <ThemeProvider theme={theme}>
      <Navbar/>
      <Flex>
        <Content>
          <div>
            <h1>ddvdvd</h1>
            <p></p>
          </div>
          <Mockup/>
        </Content>
      </Flex>
    </ThemeProvider>
   </>
  );
}

export default App;
