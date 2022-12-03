import styled from "styled-components"

export default function Logo(){
    return(
        <div>
        <Container>
        <img src="./assets/img/logo.png" />
        <span><h1>ZapRecall</h1></span>
        </Container>
        </div>
    )
}

const Container = styled.div `
padding-top: 42px;
display: flex;
justify-content: center;
background-color: antiquewhite;
color: white;
align-items: center;


span{
    width: 203px;
    margin-left: 7px;
}
img {
width: 52px;
}
`