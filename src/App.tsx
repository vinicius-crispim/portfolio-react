import React from 'react';
import EstilosGlobais from './componentes/EstiloGlobal';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './pages/Home';
function App() {

  return (
    <>
      <EstilosGlobais />
      <Header />
      <Home/>
      <Footer />
    </>
  )
}

export default App;
