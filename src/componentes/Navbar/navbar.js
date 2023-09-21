import styled from "styled-components"


const NavOptions = styled.ul`
    display: flex;
`

const Options = styled.li`
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 35px;
    min-height: 120px;
    color: #fff;
`

const TextLink = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
        color: green;
    }
`


export default function NavBar(){
    return(
        <nav>
            <NavOptions>
                <Options><TextLink href="/">home</TextLink></Options>
                <Options><TextLink href="/graficos">gráficos</TextLink></Options>
                <Options><TextLink href="/votacao">votacao</TextLink></Options>
            </NavOptions>
        </nav>
    )
}