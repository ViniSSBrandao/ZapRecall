import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import Questions from './Components/Questions'
import Footing from './Components/Footing'
import styled, { createGlobalStyle } from "styled-components"
import { useState } from 'react';

function App() {
  const [perguntas, setPerguntas] = useState(0)
  const [respostas, setRespostas] = useState(0)
  console.log(perguntas)
  return (
    
    <Ui>
      
      <Logo  />
      <Questions perguntas={(perguntas)=>setPerguntas(perguntas)} respostas={(respostas)=>setRespostas(respostas)}/>
      <Footing perguntas={perguntas} respostas={(respostas)}/>
      
      
    </Ui>
    
  );
}



const Ui = styled.div`
  background-color:#fb6b6b;
  width: 100%;
  height: 100%;
  
`

export default App;
