import logo from '../../imagens/logo_branca.svg'
import styled from 'styled-components'


const LogoConteiner = styled.div`
    display: flex;
    align-items: center;
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 300px;
`



function Logo(){
    return(
        <LogoConteiner>
            <a href='/'><LogoImage src={logo} alt='logo' /></a>
        </LogoConteiner>
    )
}

export default Logo