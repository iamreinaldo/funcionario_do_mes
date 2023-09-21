import styled from 'styled-components'
import NavBar from '../Navbar/navbar'
import Graficos from '../../pages/graficos'
import Votacao from '../../pages/votacao'
import Home from '../../pages/home'

const HeaderOptions = styled.ul`
    display: flex;
    color: white
`

function OpcoesHeader(){

    return(
        <HeaderOptions>
            <NavBar/>
        </HeaderOptions>
    )
}


export default OpcoesHeader