//  const modal = document.querySelector('.modal');
//  const btnmodal = document.querySelector('.btn');
//  const closemodal = document.querySelector('.modal__cross');

//  btnmodal.addEventListener('click', () => {
//     modal.classList.add('show');
//     modal.classList.remove('hidden');
//  });

//  closemodal.addEventListener('click', () => {
//     modal.classList.add('hidden');
//     modal.classList.remove('show');
//  });

 const modal = document.querySelector('.wrapper--modal');
 const btnmodal = document.querySelector('.btn');
 const closemodal = document.querySelector('.modal__cross');

 btnmodal.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hidden');
 });

 closemodal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('show');
 });

 const btnMenu = document.querySelector('#menu--mobile');
 const btnCloseMenu = document.querySelector('.wrapper--mobile__container__cross');
 const menu = document.querySelector('.wrapper--mobile__menu');

 btnMenu.addEventListener('click', ()=>{
   menu.classList.add('show');
   menu.classList.remove('hidden');
 });

 btnCloseMenu.addEventListener('click', ()=>{
   menu.classList.add('hidden');
   menu.classList.remove('show');
 });


 const closeLinks = document.querySelector('.wrapper--mobile__container__nav');
 closeLinks.addEventListener('click',() =>{
  menu.classList.add('hidden');
   menu.classList.remove('show');
 })























// const btnRu = document.querySelector('.Ru');
// const btnEng = document.querySelector('.Eng')
// const contacts = document.querySelector('.contacts');

// let eng = true;
// let ru = true;

// btnEng.addEventListener('click', ()=>{
//    if( eng == true){
//       contacts.innerHTML = 'Contacts';
     
//    }
   
// })

// btnRu.addEventListener('click', ()=>{
//    if( eng == true){
//       contacts.innerHTML = 'Контакты';
     
//    }
   
// })












console.log('FEFEFE')