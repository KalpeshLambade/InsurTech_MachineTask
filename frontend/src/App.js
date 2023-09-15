import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import { NavbarDefault } from './components/Global/Navbar';

function App() {
  return (
    <>
      <NavbarDefault/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
      </Routes>

    </>
  );
}

export default App;
