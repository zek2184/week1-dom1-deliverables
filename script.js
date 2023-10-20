// Menu data structure - Task 3.0
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main'); // Tasks 1
mainEl.style.backgroundColor = 'var(--main-bg)'; // Task 1.1
mainEl.innerHTML='<h1>SEI Rocks!</h1>'; // Task 1.2 
mainEl.classList.add('flex-ctr'); // Task 1.3
const topMenuEl = document.getElementById('top-menu');// Task 2.0
topMenuEl.style.height = '100%'; // Task 2.1
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'; // Task 2.2
topMenuEl.classList.add('flex-around');  //Task 2.3

// Task 3.1
menuLinks.forEach(function(menuItem){
    Object.assign(topLink  = document.createElement('a'),
    topLink.setAttribute('href', menuItem.href),
    topLink.textContent = menuItem.text,
    topMenuEl.appendChild(topLink)
    );
  }
);
console.log(topMenuEl);



