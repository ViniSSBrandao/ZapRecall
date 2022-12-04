import FlashCard from './Cards/FlasCard'
import styled from 'styled-components'
import { useState } from 'react'

const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Questions(){
    const [classe,setClasse] = useState('question')
    

    return(
        <Container>

            <FlashCard type={(classe)=> setClasse(classe)} cardsQuestion={cards.map((n)=> <div>{n.question}</div>)} cardsAnswer={cards.map((n)=> <div>{n.answer}</div>)}/>

           

        </Container>
    )
}

const Container = styled.div `
display: flex;
justify-content: center;
margin-top: 54px;
padding-bottom:90px;

`