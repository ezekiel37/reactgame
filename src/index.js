import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Elkiller from './games/elkiller/elkiller';
import Boxedman from './games/boxedman/boxedman';
import Boxedmangame from './games/boxedman/boxedmangame';
import Suspect from './games/elkiller/suspects';
import Login from './pages/login';
import Signup from './pages/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="elkiller" element={<Elkiller/>}/>
  <Route path="boxedman" element={<Boxedman/>}/>
  <Route path="boxedmangame" element={<Boxedmangame/>}/>
  <Route path="suspects" element={<Suspect/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="signup" element={<Signup/>}/> 
</Routes>
</BrowserRouter>
   

);
reportWebVitals();
