import '../css/main.css';
import Icon from '../img/icon.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "sample parcel";
  element.classList.add('main');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());
