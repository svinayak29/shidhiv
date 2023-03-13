import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import Dummy from './useEffectFile';

function App() {

  // useRef -/> we can store data , we can store the refrence to the html elements 

  // useState , useRef , useEffect

  const array = [
    1,2,3,4,5
  ]

  // const [] = useS(array)


  const inputRefrence = useRef()

  function handleClikcPick () {
    inputRefrence.current.click()
  }





  return (
    <div className="App">

      <h3>hey there . welcome to react revision sesion ...</h3>

      <input 
        type='file'
        ref={inputRefrence}
        hidden
      />

      <button className='filePicker' onClick={handleClikcPick}>Pick File</button>

      <div>
      <Dummy/>
      </div>


      {/* {
        array.map((element)=> (
          <h3>{element}</h3>
        ))
      }

      <input/> 
      <button>Submit</button> */}

    </div>
  );
}

export default App;
