import React from 'react';
import EstilosGlobais from './componentes/EstiloGlobal';
import Header from './componentes/Header';
import styled from 'styled-components';
function App() {

  const FundoGradienteStyled = styled.div`
    background-image: url('/imagens/background-main.png');
    width: 100%;
    background-size:cover;
    height: 100vh;
  `

  return (
    <>
      <EstilosGlobais/>
      <FundoGradienteStyled>
        <Header/>
      </FundoGradienteStyled>
      
    </>
  )
}

export default App;
