// https://api.tvmaze.com/search/shows?q=spiderman  -> API URL

const inp = document.querySelector('.inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('.list');
const form=document.querySelector('form');

form.addEventListener('submit', (e) => {
    list.innerHTML='';
    e.preventDefault();
    const val = inp.value;
    const URL = `https://api.tvmaze.com/search/shows?q=${val}`
    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            for (let item of data) {
                const newitem = document.createElement('img');
                if (item.show.image) {     //kyunki image me null bhi ho skta isliye check
                    newitem.setAttribute('src', item.show.image.medium);
                    list.append(newitem);
                }
            }
        })

        inp.value='';

})