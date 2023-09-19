import styled from 'styled-components'

const textOpcoes = ['home','gráficos','votação']
const HeaderOptions = styled.ul`
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
    cursor: pointer;
    min-height: 120px;
    color: #fff;
`



function OpcoesHeader(){
    return(
        <HeaderOptions>
            {textOpcoes.map((texto) => (<Options><p>{texto}</p></Options>) ) }
        </HeaderOptions>
    )
}


export default OpcoesHeader