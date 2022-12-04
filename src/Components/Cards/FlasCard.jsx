import { useState } from "react"
import styled from "styled-components"
import Questions from "../Questions"
import Botao from "./Botao"
import {IonIcon} from '@ionic/react'


let awa = 0
export default function FlashCard(prop){
    
  const [show, setShow] = useState("Pergunta " + prop.number)
  
    if(awa%3==0){
        awa=0
    }

  const [proprerties, setProperties] = useState('')

  const [buttons, setButtons] = useState('aaaaaaaaa')

  

    const iniciouTeste = () => {

        console.log(awa)
        if(awa==1){
        setShow(prop.cardsQuestion)
        
        }
        else if (awa==2){
            setShow(prop.cardsAnswer)
            
            
        }
        else{
            setShow(`Pergunta ${prop.number}`)
        }
    }
    
    if(!awa ){
        awa = 0
        return(
        <Container classes={proprerties} onClick={() => {awa++; iniciouTeste()}} classe={prop.cardsClasse}>

                
                <div>{show}<IonIcon icon="play-outline"></IonIcon></div>
                

            

        </Container>


    )}
    else if (awa===1){return(
        <ContainerQuestion classes={proprerties} onClick={() => {awa++; iniciouTeste()}} classe={prop.cardsClasse}>

                
                <div>
                <Question>  {show} </Question>
                <Opcoes>
                    <Idk>
                Nao lembrei
                </Idk>

                <MaisOuMenos>
                Quase nao lembrei
                </MaisOuMenos>
                <Zap>
                Zap!
                </Zap>
                </Opcoes>
                </div>
                
                

            

        </ContainerQuestion>


    )}
    else if (awa===2){return(
        <ContainerQuestion classes={proprerties} onClick={() => {awa++; iniciouTeste()}} classe={prop.cardsClasse}>

                
                <div>{show} </div>
                

            

        </ContainerQuestion>


    )}
    else{return(
        <Container classes={proprerties} onClick={() => {awa++; iniciouTeste()}} classe={prop.cardsClasse}>

                
                <div>{show} <Botao show={buttons} set={(buttons)=>setButtons(buttons)} /></div>
                

            

        </Container>


    )}
}

const Container = styled.div`
    
    
    display  :flex ;
    
    div{
        cursor: pointer;
        width: 300px;
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: white;
        height: 65px;
        padding-left: 15px;
        
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
    }
    
`
const ContainerQuestion = styled.div`
    
    
    display  :flex ;
    width: 300px;
    height: 131px;
    background-color: white;
    box-sizing: border-box;
    
        
       
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: #ffffd4;
        
        padding-left: 15px;
        
        flex-direction: column;
        justify-content: space-around;

            
    
`



const Answer = styled.div`

    
    
div{
    width: 300px;
    display: flex;

   
    
    margin: 12px;
    margin-top: 25px;
    border-radius: 7px;
    background-color: white;
    height: 65px;
    
    align-items: center;
}
`
const Question = styled.div`
    position: relative;
    top: -20px;
    left:15px;
    width:260px;
    word-wrap:break-word;
    background-color:green;
  
`

const Opcoes =styled.div`
    font-size: 12px;
    width: auto;
    color:white;
    
    width: 255px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    top:25px;
    left:15px;
    box-sizing: border-box;
    text-wrap:wrap;
    
    `

const MaisOuMenos =styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color: orange;
    width: 85px;
    
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    
    box-sizing: border-box;
    text-wrap:wrap;
    margin-left:5px;
`
const Zap=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:green;
    width: 85px;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    left:100px;
    box-sizing: border-box;
    text-wrap:wrap;
   margin-left: 5px;
`
const Idk=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:#ff3030;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    left:100px;
    
    text-wrap:wrap;
`