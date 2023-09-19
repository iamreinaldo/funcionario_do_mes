import './estilo.css'
import logo from '../../imagens/logo_branca.svg'



function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt='logo' className='LogoImg'></img>
        </div>
    )
}

export default Logo