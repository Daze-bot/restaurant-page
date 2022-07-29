function loadHome() {
  let main = document.querySelector('main');

  let welcome = document.createElement('p');
  welcome.classList.add('welcome');
  welcome.textContent = "Welcome to Blue Sage!"

  let outsidePic = document.createElement('div');
  outsidePic.classList = 'outsidePic';

  let welcome2 = document.createElement('p');
  welcome2.classList.add('welcome2');
  welcome2.textContent = "We are purposefully plant based and vegetarian by chance.  Come join us for unique, modern vegetarian dishes and desserts!"

  main.appendChild(welcome);
  main.appendChild(outsidePic);
  main.appendChild(welcome2);

  return main;
}

export {loadHome};