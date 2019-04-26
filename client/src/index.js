import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import { PostProvider } from './providers/PostProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostProvider>
  </AuthProvider>, 
    document.getElementById('root')
    );


