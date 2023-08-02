const ham=document.querySelector('.hamburger');
const linkslist=document.querySelector('.nav-links');

ham.addEventListener('click',(e)=>{
    // console.log(e.target);
    linkslist.classList.toggle('hamclass');
})