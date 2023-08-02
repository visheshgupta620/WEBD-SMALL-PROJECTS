const express = require('express');
const app = express();
const path = require('path');
const members = require('./data/members');
const trainers = require('./data/trainers');
const methodOverride = require('method-override');
// console.log(members);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); //css aur js vala folder ko link krne ke liye
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/members', (req, res) => {
    res.render('member', { members });
})

app.get('/member/new', (req, res) => {
    res.render('new');
})

app.post('/member/new', (req, res) => {
    const { name, age, address } = req.body;
    const id = members.length + 1;
    if (name != '' && age!= '' && address!= '') {       // if lgaya taki NULL input ho form ka to kuch add na ho
        const user = {
            id, name, age, address
        }
        members.push(user);
    }
    res.redirect('/members')
})

app.get('/trainers', (req, res) => {
    res.render('trainer', { trainers });
})

app.get('/members/:id/update',(req,res)=>{
    const {id} = req.params;
    let user;
    for(let member of members){
        if(member.id == id){
            user=member;
            break;
        }
    }
    // console.log(user);
    res.render('edit',{user});
})

app.patch('/members/:id',(req,res)=>{
    const {id} = req.params;
    const {name , age , address} = req.body;
    let user;
    for(let member of members){
        if(member.id == id){
            user=member;
            break;
        }
    }
    user.name=name;
    user.age=age;
    user.address=address;

    res.redirect('/members');
})

app.delete('/members/:id',(req,res)=>{
    const {id} = req.params;
    let user;
    for(let member of members){
        if(member.id == id){
            user=member;
            break;
        }
    }
    const index=members.indexOf(user);
    members.splice(index,1);
    res.redirect('/members');
})

const port = 3000;
app.listen(port, () => {
    console.log('Server is up at Port : ', port);
})