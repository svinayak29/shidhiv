import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //  data management  -/> developers
  //  ui management  -/> react 

  //  HOW USESTATE WORKS ? 
  //  you updates dta   (DONE)
  //  tell the react taht data is updated  (Done)
  //   react will compare the data with initial data 10 + 11 , 12 ()dONE
  //  if it dound different , it will update the ui  

   //const [readData, updateData] = useState(initialValue)
  const [count , setCount] = useState(10)
  const [name , setName] = useState('jaGdish')
  // let count = 0
  let newName ;



  function handleClickButton () {
    // count = count + 1

    if(count === 20) {
      alert('limite reached !!')
      return
    }
    setCount(count+1)


    //  
    // alert(3535)
    // const newValue = count + 10
    // initail not matched with new value , then only it updateas the data
    // setCount(count+0)
    // 10 + 0 => 10 === 10 
    // count = count + 1
    // console.log(count)
  }

  //  collect the name from input
  //  useState ()
  //  new value from step1 , update it using 
  

  function handleChnageNmaae (event) {
    console.log(event.target.value)
    newName = event.target.value
  }



  function changeName  () {
    setName(newName)
    // I WILL UPDATE THE NAME HERE IN USETATE
    
  }

  return (
    <div className="App">

      <div>
        <h2>{count}</h2>
        <button onClick={handleClickButton}>Click me !!</button>
      </div>

      
      <div>
        <h1>{name}</h1>
        <input onChange={handleChnageNmaae}/>
        <button onClick={changeName}>ChangeName</button>
      </div>
  
    </div>
  );
}

export default App;
