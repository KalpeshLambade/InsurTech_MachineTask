import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import NavbarMain from './components/Global/Navbar';
import Sidebar from './components/sidebar/Siderbar';

function App() {
  return (
    <>
      <NavbarMain/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/side' element={<Sidebar/>}/>
      </Routes>

    </>
  );
}

export default App;
