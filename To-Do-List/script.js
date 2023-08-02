const inp = document.querySelector('.inp');
const btn = document.querySelector('#btn');
const tasklist = document.querySelector('.task-list');

btn.addEventListener('click', (e) => {
    const input = inp.value;
    if(input===''){       //if-else isliye use kiya taki agar input me kuch na ho to task add na ho
    }
    else{
    // console.log(input);
    const str = `<div>
        <input class="check" type="checkbox">
        <p>${input}</p>
    </div>
    <div class="movements">
        <button class="up-arrow">⬆️</button>
        <button class="bin">🗑️</button>
        <button class="down-arrow">⬇️</button>
    </div>`;
    const newadd= document.createElement('div');
    newadd.classList.add('task');
    newadd.innerHTML=str;
    tasklist.append(newadd);
    inp.value='';
    }
})

tasklist.addEventListener('click',(e)=>{
    const selectedclass = e.target.getAttribute('class');
    console.log(selectedclass);
    if(selectedclass==='bin'){
        // console.log('caught');
        e.target.parentElement.parentElement.innerHTML='';
    }
    if(selectedclass==='up-arrow'){
        // console.log('caught');
        const place = e.target.parentElement.parentElement.previousElementSibling;
        place.before(e.target.parentElement.parentElement);
    }
    if(selectedclass==='down-arrow'){
        // console.log('caught');
        const place = e.target.parentElement.parentElement.nextElementSibling;
        place.after(e.target.parentElement.parentElement);
    }
    if(selectedclass==='check'){
        const donetask=e.target.parentElement;
        donetask.classList.toggle('done');
    }
})