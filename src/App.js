import logo from './logo.svg';
import './App.css';
import CustomButton from './components/button';

function App() {

  //  function to pass as props
  function handleClickButton () {
    alert('I am Clicked !!!')
  }

  //  CSS TO PASS AS PROPS
  const buttonCss = {
    background : 'blue'
  }

    //  to send as pros

    //  variable/key -> 
    //   assign value to variable that we want to send as prop 
    //  value -/> data ,function , css 

    // to access the props 
    // props.varible // props.key 
    //  {props.varible}
  
  return (
    <div className="App">
      <CustomButton 
        buttonText = 'Click Me !!'
        number = '5698456984769'
        onClickFunction  = {handleClickButton}
        buttonStyle = {buttonCss}
        customClassName = 'buttonStyle'
      />
    </div>
  );
}

export default App;
