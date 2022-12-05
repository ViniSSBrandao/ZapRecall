import styled from "styled-components"

export default function Footing(prop){
    console.log(prop.perguntas)
    return(
        <Container data-identifier='footer'>
            <h3>
                {prop.respostas}/{prop.perguntas} concluidos
            </h3>
        </Container>
        
    )
}

const Container = styled.div`
width: 100%;
height: 70px;
position: fixed;
display: flex;
bottom: 0;
text-justify: center;
justify-content: center;
background-color: white;
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;500&display=swap');
font-family: recursive;
font-weight: 400;
`