import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './pages/register';
import Login from './pages/login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//  http://localhost:3000/    =/>   '/'     =/> main page located here ...
//  http://localhost:3000/register   =>  '/register'     =/> regiatration pageis located here 
//  http://localhost:3000/login     =/>   '/login'       =/> login page is lcated here ...



//  home -/> component  -/> App.js
//  register component -/> register.js
//  login componentn   -/> login.js




//  localhost:3000 -? App componet 
//  localhost:3000/register -/> register.js 
//   localhost:3000/login -/> login.js

  //  '/'   -/> 


  //  1st -/> to set the componets/pages at their respective paths 
  //  2nd -/> redirect in between paths (useNevigate)




const router = createBrowserRouter([
  {
    path: "/",
    // http://localhost:3001
    element: <App/>,
  },
  {
    path : '/register' ,
    // http://localhost:3001/register
    element :<Register/>
  },
  {
    path : '/login' ,
    // http://localhost:3001
    element : <Login/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));


//  this is the only root file in react application 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
