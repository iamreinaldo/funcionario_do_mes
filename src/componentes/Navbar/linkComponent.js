import Home from "../../pages/home"
import Graficos from "../../pages/graficos"
import Votacao from "../../pages/votacao"

function linkComponent(){
    let Component
    switch (window.location.pathname) {
        case "/":
            Component = Home
            break
        case "/graficos":
            Component = Graficos
            break
        case "/votacao":
            Component = Votacao
            break
    }
    return(
        <Component />
    )
}

export default linkComponent
