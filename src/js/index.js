import '../css/main.css';
import '../css/main.scss';
import '../js/react.js';
import Icon from '../img/icon.png';
import Json from '../json/name.json';
import Yml  from '../yml/name.yml';
import React from 'react';
import ReactDOM from 'react-dom';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "sample parcel";
  element.classList.add('main');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Json);
  console.log(Yml);


  return element;
}

document.body.appendChild(component());

const Application = () => {
  return <h1>Hello world!</h1>
}
ReactDOM.render(<Application />, document.getElementById('app'));
