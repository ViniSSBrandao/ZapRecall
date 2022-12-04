import { useState } from "react"
import styled from "styled-components"
import Questions from "../Questions"
import Botao from "./Botao"


export default function FlashCard(prop){
    
  const [show, setShow] = useState("Pergunta " + prop.number)
  


  const [proprerties, setProperties] = useState('')

  const [buttons, setButtons] = useState(<button> toma awa </button>)


  let awa = 0

    const iniciouTeste = () => {
        console.log(awa)
        if(awa==0){
        setShow(prop.cardsQuestion + buttons)
        awa=1
        }
        else if (awa==1){
            setShow(prop.cardsAnswer)
            
            awa=3
        }
        else{
            setShow(`Pergunta ${prop.number}`)
        }
    }
    
    return(
        <Container classes={proprerties} onClick={() => { iniciouTeste()}} classe={prop.cardsClasse}>

                
                <div>{show} <Botao show={buttons} set={(buttons)=>setButtons(buttons)} /></div>
                

            

        </Container>


    )
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
    }
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
    padding-left: 15px;
    align-items: center;
}
`
const Question = styled.div`
    
 
    div{
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: white;
        height: 65px;
        padding-left: 15px;
        align-items: center;
        
        
    }
`