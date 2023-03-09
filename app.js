document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
    alert('please write the task')
    }else{
    document.querySelector('#tasks').innerHTML +=`
    <div class="task">
    <span id="taskname">
    ${document.querySelector('#newtask input').value}</span>
    
    <button class="delete"><i class="fa fa-trash-o"></i></button>
    </div>
    `
    
    // active delete button
    var current_tasks = document.querySelectorAll('.delete');
    for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
    this.parentNode.remove();
    }
    }
    }
    // Return empty input string after submit
    document.getElementById('name').value="";
    }



    const task_actions_el=document.createElement("div");
    task_actions_el.classList.add("actions");

   const task_edit_el=document.createElement("button");
   task_edit_el.classList.add("edit");
   task_edit_el.innerHTML="edit";

   const task_delete_el=document.createElement("button");
   task_delete_el.classList.add("delete");
   task_delete_el.innerHTML="delete";

   task_actions_el.appendChild(task_edit_el);
   task_actions_el.appendChild(task_delete_el);

   task_el.appendChild(task_actions_el);

   list_el.appendChild(task_el);

   input.value="";


   task_edit_el.addEventListener('click',() => {
      if (task_edit_el.innerText.toLowerCase()=="edit") {
         task_input_el.removeAttribute("readonly");
         task_input_el.focus();
         task_edit_el.innerText="Save";
         } else{
         task_input_el.setAttribute("readonly","readonly");
         task_edit_el.innerText="edit"
             }
        });
 
    