let listdisplay=document.getElementById('todolist');
let input=document.getElementById('tdinput');
let btn=document.getElementById('inputBtn');
let todos=Array();
btn.addEventListener('click',()=>{
    let value=input.value;
    if(value!=""){
        todos.push(value);
        localStorage.setItem('todos',JSON.stringify(todos));
        let todo=JSON.parse(localStorage.getItem('todos'));
        let li=document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML=`<span class="fs-6"><i class="fa-duotone fa-list"></i></span><span class="fs-6"> ${todo[todo.length-1]}</span>
        <button class="delete btn"><i class="fas fa-trash"></i></button>`
        listdisplay.appendChild(li);
        li.querySelector('.delete').addEventListener('click',()=>{
            let index=todos.indexOf(li.querySelector('span').innerText);
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
            <span class="fs-6"> ${todo[todo.length-1]}</span>
            <button class="delete btn"><i class="fas fa-trash"></i></button>`
            listdisplay.appendChild(li);
            li.querySelector('.delete').addEventListener('click',()=>{
                let index=todos.indexOf(li.querySelector('span').innerText);
                todos.splice(index,1);
                localStorage.setItem('todos',JSON.stringify(todos));
                listdisplay.removeChild(li);
            })
        }
        input.value="";
    }
})