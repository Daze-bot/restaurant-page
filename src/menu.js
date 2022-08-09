function loadMenu() {
  let main = document.querySelector('main');

  let lunch = document.createElement('p');
  lunch.classList.add('lunch');
  lunch.textContent = "Lunch Menu (Wed - Sun | 12-3)";

  let lunchMenu = document.createElement('div');
  lunchMenu.classList.add('mealMenu');

  let lunchFront = document.createElement('div');
  lunchFront.classList.add('lunchFront', 'menu');

  let lunchBack = document.createElement('div');
  lunchBack.classList.add('lunchBack', 'menu');

  lunchMenu.appendChild(lunchFront);
  lunchMenu.appendChild(lunchBack);

  let dinner = document.createElement('p');
  dinner.classList.add('dinner');
  dinner.textContent = "Dinner Menu (Tue - Sun | 4-8)";

  let dinnerMenu = document.createElement('div');
  dinnerMenu.classList.add('mealMenu');

  let dinnerFront = document.createElement('div');
  dinnerFront.classList.add('dinnerFront', 'menu');

  let dinnerBack = document.createElement('div');
  dinnerBack.classList.add('dinnerBack', 'menu');

  dinnerMenu.appendChild(dinnerFront);
  dinnerMenu.appendChild(dinnerBack);
  
  main.appendChild(lunch);
  main.appendChild(lunchMenu);
  main.appendChild(dinner);
  main.appendChild(dinnerMenu);

  return main;
}

export {loadMenu};