const disp = document.getElementById('expression');
const buttons = document.querySelectorAll('button');
for (let button of buttons){
    button.addEventListener('click',(e)=>{
        let selectedbutton = e.target.innerText;

        if(selectedbutton==='C'){
            disp.value='';
        }
        else if(selectedbutton==='x'){
            disp.value += '*';
        }
        else if(selectedbutton==='='){
            try{
            disp.value=eval(disp.value);
            }
            catch(error){
                disp.value='Wrong Expression'
            }
        }
        else{
            disp.value+=selectedbutton;
        }
    })
}