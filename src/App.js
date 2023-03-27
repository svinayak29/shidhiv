import logo from './logo.svg';
import './App.css';

import { useNavigate } from "react-router-dom";

function App() {



  const navigate = useNavigate();



  //  App is put root function

  //  home page (default)
  //  registration page (registration component)
  //  login page  (login components)
  //  aboutUs page  (extra information)


  //  functionup.org
  //  https://functionup.org/ hire -/> hire page
  //  https://functionup.org/admission-process -/> admission process

  //   http://localhost:3000 
  // http://localhost:3000/registration
  // http://localhost:3000/login
  // http://localhost:3000/aboutUs 

  //  process of moving from one page to another -/> routing 

  //  home -> regitration -> home 



  //  routing ? process of moving from one page to another
  //  why we need multiple pages 

  // how the routing will be possible -/> it is not part of react

  // 3rd party packages -> have to use to exicutes the routing 

  // react-router-dom , react-router , ...






  //  redux , context api , recoil 

  //  go to its official documentation 
  //  documentation -/> basic details , data , implimetation , use it == ? 


 const pagebykey = {
  'register' : '/register' ,
  'login' : '/login'
 }

 function redirect (key) {
  const pathToRedirect = pagebykey[key]
  navigate(pathToRedirect)
 }




  function redirectToRegisterPage () {
    navigate("/register");
  }

  function redirectToLoginPage () {
    navigate("/login");
  }










  return (
    <div className="App">
      <h1>this is home page !</h1>


      <button 
      onClick = {redirectToRegisterPage}
      // onClick={() => redirect('register')}
      >Register here ...</button>



      <br/>
      <br/>



      <button 
      onClick={redirectToLoginPage}
      // onClick={() => redirect('login')}
      >
        
        login here ..</button>
      

    </div>
  );
}

export default App;
