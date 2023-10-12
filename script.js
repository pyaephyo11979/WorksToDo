let listdisplay=document.getElementById('todolist');
let input=document.getElementById('tdinput');
let btn=document.getElementById('inputBtn');
let restoreBtn=document.getElementById('restoBtn');
let todos=Array();
btn.addEventListener('click',()=>{
    let value=input.value;
    if(value!=""){
        todos.push(value);
        localStorage.setItem('todos',JSON.stringify(todos));
        let todo=JSON.parse(localStorage.getItem('todos'));
        let li=document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML=`<span class="fs-6"><i class="fa-duotone fa-list"></i></span><span class="fs-6 name"> ${todo[todo.length-1]}</span>
        <button class="delete btn"><i class="fas fa-trash"></i></button>`
        listdisplay.appendChild(li);
        li.querySelector('.delete').addEventListener('click',()=>{
            let index=todos.indexOf(li.querySelector('.name').innerText);
            todos.splice(index,1);
            localStorage.setItem('todos',JSON.stringify(todos));
            listdisplay.removeChild(li);
        })
        input.value="";
    }
})
input.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        let value=input.value;
        if(value!=""){
            todos.push(value);
            localStorage.setItem('todos',JSON.stringify(todos));
            let todo=JSON.parse(localStorage.getItem('todos'));
            let li=document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML=`
            <span class="fs-6"><i class="fa-duotone fa-list"></i></span>
            <span class="fs-6 name"> ${todo[todo.length-1]}</span>
            <button class="delete btn"><i class="fas fa-trash"></i></button>`
            listdisplay.appendChild(li);
            li.querySelector('.delete').addEventListener('click',()=>{
                let index=todos.indexOf(li.querySelector('.name').innerText);
                todos.splice(index,1);
                localStorage.setItem('todos',JSON.stringify(todos));
                listdisplay.removeChild(li);
            })
        }
        input.value="";
    }
})
let clock=document.getElementById('clockSpace');
function showTime(){
    let date=new Date();
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
let session="AM";
if(hour==0){
    hour=12;
}
if(hour>12){
    hour=hour-12;
    session="PM";
}
hour=(hour<10)? "0" + hour: hour;
min=(min<10)? "0" + min: min;
sec=(sec<10)? "0" + sec: sec;
clock.innerHTML=`${hour}:${min}:${sec} ${session}`
setTimeout(showTime,1000);
}
showTime();
// restoreBtn.addEventListener('click',()=>{
//     let todolist=JSON.parse(localStorage.getItem('todos'));
//     let li=document.createElement('li');
//     li.classList.add('list-group-item');
//     for(let i=0;i<todolist.length;i++){
//         li.innerHTML=`
//     <span class="fs-6"><i class="fa-duotone fa-list"></i></span>
//     <span class="fs-6"> ${todolist[i]}</span>
//     <button class="delete btn"><i class="fas fa-trash"></i></button>`
//     listdisplay.appendChild(li);
//     }
//     li.querySelector('.delete').addEventListener('click',()=>{
//         let index=todos.indexOf(li.querySelector('span').innerText);
//         todos.splice(index,1);
//         localStorage.setItem('todos',JSON.stringify(todos));
//         listdisplay.removeChild(li);
//     })
// })