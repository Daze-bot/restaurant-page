function loadHome() {
  let main = document.querySelector('main');

  let welcome = document.createElement('p');
  welcome.textContent = "Welcome to Blue Sage!"

  main.appendChild(welcome);

  return main;
}

export {loadHome};