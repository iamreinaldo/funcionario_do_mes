import './estilo.css'

const textOpcoes = ['home','gráficos','votação']



function OpcoesHeader(){
    return(
        <ul className="opcoesHeader">
            {textOpcoes.map((texto) => (<li className="opcao"><p>{texto}</p></li>) ) }
        </ul>
    )
}


export default OpcoesHeader