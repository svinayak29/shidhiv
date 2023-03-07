import logo from './logo.svg';
import './App.css';

import Heading from './componts/heading'
import PersonDescription from './componts/person-description';
import Adress from './componts/adress';


function MainFunction() {

  // we can take input -/> props 
  // js function VS react function 


  // component is isolates piece of complate UI 
  // component === funuction 
  //  js function return -/> data types
  // react functions return -/> ui/jsx

  // com1 -/> heading
  // com2  -/> name and age
  // com3 -/> adress

  const heading = 'HELLO WORLD !!!'
  const name = 'Suman Kumar'
  const age = 23
  const adress = 'Bmaglore , karnataka , india'

  // fir sending the props we ned to send them at veriable
  //  to use javascript inside jsx part you need to write it in the {} only

  
  return (
    <div className="App">

      <Heading 
          headingText = {heading}
      />

      
      <PersonDescription 
        name = {name}
        age = {age}
      />
      <Adress/>
    </div>
  );
}

export default MainFunction;
