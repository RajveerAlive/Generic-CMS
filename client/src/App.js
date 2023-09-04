import Navbar from './components/Navbar';
import Adduser from './components/Adduser';
import GenericCMS from './components/GenericCMS';
import Edituser from './components/Edituser';
import Settings from './components/settings';
import Blog from './components/blog';
import { ContextProvider } from './context/Context';
import Bmr from './components/bmr';

import './App.css';
import Allusers from './components/Allusers';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <Navbar/>
      <Routes>
        <Route path='/' element={<GenericCMS/>}/>
        <Route path='/all' element={<Allusers/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/bmr' element={<Bmr/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;