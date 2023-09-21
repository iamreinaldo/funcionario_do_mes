import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'
import styled from 'styled-components'

const HeaderConteiner = styled.header`
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    display: flex;
    justify-content: center;
`


function Header(){

    return(
        <HeaderConteiner>
            <Logo/>
            <OpcoesHeader/>
        </HeaderConteiner>
    )
}


export default Header