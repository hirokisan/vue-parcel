import './main.css';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "sample parcel";
  element.classList.add('main');

  return element;
}

document.body.appendChild(component());
