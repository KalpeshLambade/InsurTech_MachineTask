import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
      </Routes>

    </>
  );
}

export default App;
