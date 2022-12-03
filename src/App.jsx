import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import Questions from './Components/Questions'
import Footing from './Components/Footing'
import styled, { createGlobalStyle } from "styled-components"

function App() {
  return (
    
    <Ui>
      
      <Logo />
      <Questions />
      <Footing />
      
      
    </Ui>
    
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    color:#fb6b6b ;
  }
`

const Ui = styled.div`
  background-color:#fb6b6b;
  width: 100%;
  height: 100%;
`

export default App;
