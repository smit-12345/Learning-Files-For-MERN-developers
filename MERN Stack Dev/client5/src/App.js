
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import LoginComponent from './components/LoginComponent';
import NavbarComponent from './components/NavbarComponent';
// import RegComp from './components/RegComp';
import Error from './components/Error';
import PostForm from './components/PostForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<PostForm />}></Route>
          <Route path='/about' element={<AboutComponent />}></Route>
          <Route path='/home' element={<HomeComponent />}></Route>
          <Route path='/contact' element={<ContactComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          {/* <Route path='/register' element={<RegComp />}></Route> */}
          <Route path='/error' element={<Error />}></Route>
          <Route path='/post' element={<PostForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
