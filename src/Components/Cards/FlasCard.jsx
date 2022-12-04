import { useState } from "react"
import styled from "styled-components"
import Questions from "../Questions"


export default function FlashCard(prop){
    
  const [show, setShow] = useState(prop.cardsQuestion)
  console.log(prop.cardsQuestion)
  let awa = 0
    
    return(
        <Container onClick={() => {awa++; prop.type(awa)}} classe={prop.cardsClasse}>

                
                {show}
                

            

        </Container>


    )
}

const Container = styled.div`
    
    
    display  :flex ;
    flex-direction: column;
    div{
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