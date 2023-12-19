import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/main' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
