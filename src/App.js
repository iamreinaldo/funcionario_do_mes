import Header from './componentes/Header';
import styled from 'styled-components';
import LinkComponent from './componentes/Navbar/linkComponent';
import Rodape from './componentes/footer';



const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

  li{
    list-style: none;
  }
`


function App() {
  return (
    <AppConteiner>
      <Header/>
      <LinkComponent />
      <Rodape />
    </AppConteiner>
  );
}

export default App;
