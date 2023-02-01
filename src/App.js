import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className='App'>
      <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/products' element={
      <RequiredAuth>
        <Products />
      </RequiredAuth>
      }></Route>
      <Route path='/orders' element={
      <RequiredAuth>
        <Orders />
      </RequiredAuth>
      }>

      </Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
     </Routes>
    </div>
  );
}

export default App;
