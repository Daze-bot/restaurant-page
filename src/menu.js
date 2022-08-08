function loadMenu() {
  let main = document.querySelector('main');

  let lunch = document.createElement('p');
  lunch.classList.add('lunch');
  lunch.textContent = "Lunch Menu (Wed - Sun 12-3)";

  let lunchMenu = document.createElement('div');
  lunchMenu.classList.add('mealMenu');

  let lunchFront = document.createElement('div');
  lunchFront.classList.add('lunchFront', 'menu');

  let lunchBack = document.createElement('div');
  lunchBack.classList.add('lunchBack', 'menu');

  lunchMenu.appendChild(lunchFront);
  lunchMenu.appendChild(lunchBack);



  main.appendChild(lunch);
  main.appendChild(lunchMenu);
  return main;
}

export {loadMenu};