import styled from "styled-components"

const LinkStyle = styled.a`
text-decoration: none;
color: white;
&:hover{
    color: black;
}
`

export default function Rodape(){
    return(
        


        <footer>
            <p>Powered by <b><LinkStyle href="https://www.eruda.com.br">ERUDA</LinkStyle></b></p>
        </footer>
    )
}







