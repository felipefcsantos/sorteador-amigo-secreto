import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Cabecalho from './components/Cabecalho';
import Configuracao from './pages/Configuracao';
import Sorteio from './pages/Sorteio';

function App() {
  return (
      <BrowserRouter>
        <RecoilRoot>
          <Cabecalho/>
          <Routes>
            <Route path='/' element={<Configuracao/>}/>
            <Route path='/sorteio' element={<Sorteio />}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
  );
}

export default App;
