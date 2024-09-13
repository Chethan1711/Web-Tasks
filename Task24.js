let formbtn=document.getElementById('form-el');
formbtn.addEventListener('submit',function(event){
    event.preventDefault();
    let taskbtn=document.getElementById('text');
    let task=taskbtn.value;
    // localStorage.clear();
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    console.log(taskList)
    display();
    taskbtn.value='';
})
function display(){
    let Listbtn=document.getElementById('output');
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList.length>=1){
        let eachItem=``;
        for(let task of taskList){
            eachItem+=`<li class="list-group-item list-group-item-dark mb-8">
           <span> ${task}</span>
            <button class="btn-close float-end">
            </button>
            </li>
            `;
        }
        Listbtn.innerHTML=eachItem;
    }
   
}
display();

let Listbtn=document.getElementById('output');
Listbtn.addEventListener('click',function(event){
    let e=event.target;
    e.parentElement.innerText
    if(e.classList.contains('float-end')){
        let selectedText=e.parentElement.innerText;
        // console.log(selectedText)
        let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
         taskList=taskList.filter((task)=>{
            return task!==selectedText;
        });
        taskList=localStorage.setItem('tasks',JSON.stringify(taskList));
        display();

    }
});