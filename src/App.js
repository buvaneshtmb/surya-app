import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword';
import Email from './components/Email';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/> }/>
      <Route path='/reset-password' element = {<ForgotPassword/> }/>
      <Route path='/reset-password-email' element = {<Email/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
