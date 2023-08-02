let introb = document.querySelector('.intb');
let intro = document.querySelector('.intro');
introb.addEventListener('click', (e) => {
    intro.classList.toggle('introadd');
    edu.classList.remove('eduadd');
    skill.classList.remove('skilladd');
})

let edub = document.querySelector('.edub');
let edu = document.querySelector('.edu');
edub.addEventListener('click', (e) => {
    edu.classList.toggle('eduadd');
    skill.classList.remove('skilladd');
    intro.classList.remove('introadd');
})

let skillb = document.querySelector('.skillb');
let skill = document.querySelector('.skillset');
skillb.addEventListener('click', (e) => {
    skill.classList.toggle('skilladd');
    edu.classList.remove('eduadd');
    intro.classList.remove('introadd');
})