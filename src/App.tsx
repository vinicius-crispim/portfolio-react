import React from 'react';
import EstilosGlobais from './componentes/EstiloGlobal';
import Header from './componentes/Header';
import styled from 'styled-components';
import Footer from './componentes/Footer';
function App() {


  const FundoGradienteStyled = styled.div`
    background-image: url('/imagens/background.png');
    width: 100%;
    background-size:cover;
    height: 100vh;
  `

  return (
    <>
      <EstilosGlobais />
      <Header />
      <FundoGradienteStyled>
      </FundoGradienteStyled>
      <Footer />
    </>
  )
}

export default App;
