import '../css/main.css';
import '../css/main.scss';
import Icon from '../img/icon.png';
import Json from '../json/name.json';
import Yml  from '../yml/name.yml';
import Vue  from 'vue/dist/vue.esm.js';
import App  from './components/app.js';

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
