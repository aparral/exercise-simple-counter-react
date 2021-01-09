import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Simplecounter from './App';
import PropTypes from 'prop-types';


Simplecounter.propTypes = {
  // Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
  // son todas opcionales.
  digitone: PropTypes.number,
  digittwo: PropTypes.number,
  digitthree: PropTypes.number,
  digitfour: PropTypes.number
}

let counter=0;
setInterval(() => {
  const clock_four=Math.floor(counter/1000);
  const clock_three=Math.floor(counter/100);
  const clock_two=Math.floor(counter/10);
  const clock_one=Math.floor(counter/1);
  console.log(clock_four, clock_three, clock_two, clock_one);
  counter++;

ReactDOM.render(
  <Simplecounter digitone={clock_one} digittwo={clock_two} digitthree={clock_three} digitfour={clock_four}/>,
  document.getElementById('root')
);
},1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
