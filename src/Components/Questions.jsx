import FlashCard from './Cards/FlasCard'
import styled from 'styled-components'
import { useState } from 'react'


const cards = [
    { id: 1,question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { id: 2,question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3,question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { id: 4,question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { id: 5,question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6,question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 7,question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { id: 8,question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Questions(prop){
    
    const [respostas,setRespostas] = useState(0)
    
    console.log(respostas)

    return(
        <Container contarPerguntas={prop.perguntas(cards.length)} contarRespostas={prop.respostas(respostas)}>

            {cards.map((n) => <FlashCard respostas={respostas} setType={(respostas)=>setRespostas(respostas)} number={n.id} cardsQuestion={n.question} cardsAnswer={n.answer}/>)}

           

        </Container>
    )
}

const Container = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;500&display=swap');
font-family: Recursive;
font-weight: 400;
display: flex;
justify-content: center;
margin-top: 54px;
padding-bottom:90px;
flex-direction: column;
align-items: center;

font-weight: 400;
`