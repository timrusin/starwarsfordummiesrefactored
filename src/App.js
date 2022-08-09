import React, { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Planets from './pages/Planets'
import Movies from './pages/Movies'

const App = () => {
  return (
  <>
    <Navigation/>
      <main>
      <Routes>
        <Route path='/' element={ <Home/> }/>
          <Route path='/characters' element={ <Characters/> }/>
          <Route path='/planets' element={ <Planets/> }/>
          <Route path='/movies' element={ <Movies/> }/>
        </Routes>
      </main>
  </>
  );
}

export default App