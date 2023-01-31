import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div className='App'>
      <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
     </Routes>
    </div>
  );
}

export default App;
