import styled from 'styled-components'
import NavBar from '../Navbar/navbar'


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