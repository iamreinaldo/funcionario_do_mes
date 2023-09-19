import './estilo.css'
import OpcoesHeader from '../OpcoesHeader'
import Logo from '../Logo'


function Header(){
    return(
        <header className='AppHeader'>
            <Logo/>
            <OpcoesHeader/>
        </header>
    )
}


export default Header