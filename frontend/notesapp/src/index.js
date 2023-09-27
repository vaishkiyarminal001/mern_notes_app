import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContextProvider from './Component/Context/AuthContextProvider';

import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </AuthContextProvider>
   
);


