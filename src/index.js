import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Texto from './pages/texto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/texto' element={<Texto />}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);