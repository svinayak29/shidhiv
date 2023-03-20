import logo from './logo.svg';
import './App.css';
import ButtonOne from './components/button-one/buttton-one';
import ButtonTwo from './components/button-two/button-two';
import CustomInput from './components/input/input';

function App() {
  //  css ->  css properties && how to apply css 

  // inline , internal , external

  //  <h1 style = 'color : red'>hello <h1/>

  //  <style>
  //  .class #id {
    // 
  // }
  // </style> inline and internal css will have to camelCase 
  // 



  const subHeadingStyle = {
    color : 'blue',
    fontWeight : 700
  }

  return (
    <div className="App">
      <h4 style={{color : 'red',fontSize : '30px'}}>Welcome to react css session ...</h4>
      <p style={subHeadingStyle}>This is sub heading text !!!</p>

    <div style={{marginBottom : '30px'}}>
      <ButtonOne/>
    </div>
      <ButtonTwo/>

      <div>
        <CustomInput/>
      </div>
    </div>

  );
}

export default App;
