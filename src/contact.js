function loadContact() {
  let main = document.querySelector('main');

  let p0 = document.createElement('p');
  p0.classList.add('welcome2');
  p0.textContent = "We are currently not taking any reservations, customers " +
      "will be seated on a first-come first-serve basis.  Please feel free to " + 
      "call ahead for questions regarding availability!";

  let p1 = document.createElement('p');
  p1.classList.add('contactType');
  p1.textContent = "Take-Out or Questions:";

  let p2 = document.createElement('p');
  p2.classList.add('contactInfo');
  p2.textContent = "(215) 942-8888"

  let p3 = document.createElement('p');
  p3.classList.add('contactType');
  p3.textContent = "Check us out on Instagram:"

  let ig = document.createElement('a');
  ig.classList.add('igLink');
  ig.setAttribute('href', 'https://www.instagram.com/bluesagegrille/?hl=en');
  ig.setAttribute('target', "_blank");
  let igName = document.createTextNode("Blue Sage Vegetarian Grille");
  ig.appendChild(igName);

  let hr = document.createElement('hr');
  let hr2 = document.createElement('hr');

  main.appendChild(p0);
  main.appendChild(hr);
  main.appendChild(p1);
  main.appendChild(p2);
  main.appendChild(hr2);
  main.appendChild(p3);
  main.appendChild(ig);

  return main;
}

export {loadContact};