import styled from "styled-components"

export default function Footing(){
    return(
        <Container>
            <h3>
                0/4 concluidos
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
`