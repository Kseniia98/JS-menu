const catList = document.querySelector('.cat-list');

function onList(){
  catList.className = 'list-cat';
}

const categ = document.querySelector('#categories');
categ.addEventListener('click', onList);

////////////////////////

const womenList = document.querySelector('.women-list');

function onWomList(){
  womenList.className = 'list-women'
}

const women = document.querySelector('#women');
women.addEventListener('click', onWomList);