function loadHome() {
  let main = document.querySelector('main');

  let welcome = document.createElement('p');
  welcome.classList.add('welcome');
  welcome.textContent = "Welcome to Blue Sage!"

  let outsidePic = document.createElement('div');
  outsidePic.classList = 'outsidePic';

  let welcome2 = document.createElement('p');
  welcome2.classList.add('welcome2');
  welcome2.textContent = "We are purposefully plant based and vegetarian by chance.  Come join us for unique, modern, vegetarian dishes and desserts!";

  let address = document.createElement('p');
  address.classList.add('address');
  address.textContent = "727 Second Street Pike, \nSouthampton, PA 18966";

  let hours = document.createElement('div');
  hours.classList.add('hours');

  let lunchHours = document.createElement('div');

  let lspan = document.createElement('p');
  lspan.classList.add('meal');
  lspan.textContent = "Lunch:";
  let lunch = document.createElement('p');
  lunch.textContent = "Wednesday through Sunday \n 12pm - 3pm";

  let dinnerHours = document.createElement('div');

  let dspan = document.createElement('p');
  dspan.classList.add('meal');
  dspan.textContent = "Dinner:";
  let dinner = document.createElement('p');
  dinner.textContent = "Tuesday through Sunday \n 4pm - 8pm";

  let hr = document.createElement('hr');
  let hr2 = document.createElement('hr');

  lunchHours.appendChild(lspan);
  lunchHours.appendChild(lunch);
  dinnerHours.appendChild(dspan);
  dinnerHours.appendChild(dinner);

  hours.appendChild(lunchHours);
  hours.appendChild(dinnerHours);

  main.appendChild(welcome);
  main.appendChild(outsidePic);
  main.appendChild(address);
  main.appendChild(hr);
  main.appendChild(welcome2);
  main.appendChild(hr2);
  main.appendChild(hours);

  return main;
}

export {loadHome};