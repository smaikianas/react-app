import './App.css';
import { Accueil } from './screens/Accueil';
import { nCV } from './screens/nCV';
import { Formulaire } from './screens/Formulaire';
import { Routes,Route,NavLink } from 'react-router-dom';
import { CV } from './screens/CV';
function App() {
  return (
    <div className='container mt-5'>
      <header className='flex justify-between items-center mb-5'>
        <img className='w-20' src='images/R.png' alt='Logo de EMI' />
        <nav className='flex justify-end'>
        <NavLink className=' p-2 mr-5 text-xl' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})}to='/'>Accueil</NavLink>
          <NavLink className='  p-2 mr-5 text-xl' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/Formulaire'>Formulaire</NavLink><br></br>
          <NavLink className=' p-2 w-20 text-xl text-center' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/CV'>CV</NavLink><br></br>
        </nav>
      </header>
      <Routes>
        <Route path='/'element={ <Accueil/> } />
        <Route path='/Formulaire'element={ <Formulaire/> } />
        <Route path='/CV'element={ <CV/> } />
      </Routes>
      <footer>

      </footer>
    </div>
  );
  
}

export default App;
