const searchBtn = document.getElementById("Search-btn");

console.log(searchBtn);

const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function(){
   // searchInput.classList.add('active-search');
    searchInput.classList.toggle('active-search');
    console.log(searchInput);
})

document.querySelector('main').addEventListener('click', ()=>{
    searchInput.classList.remove('active-search');
})