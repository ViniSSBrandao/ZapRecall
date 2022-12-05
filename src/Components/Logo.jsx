import styled from "styled-components"

export default function Logo(){
    return(
        <div>
        <ContainerLogo>
        <img src="./assets/img/logo.png" />
        <span><h1>ZapRecall</h1></span>
        </ContainerLogo>
        </div>
    )
}

const ContainerLogo = styled.div `
padding-top: 42px;
display: flex;
justify-content: center;
font-weight: 400;
color: white;
align-items: center;
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
font-family: Righteous;
span{
    width: 203px;
    margin-left: 7px;
}
img {
width: 52px;
}
`