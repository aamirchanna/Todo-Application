const btnDelete=(id)=>{
    let todos = JSON.parse(localStorage.getItem('todos'))
    let index_delete = todos.findIndex(todo=>todo.id===id)
    if(index_delete!== -1){
      todos.splice(index_delete,1);
      localStorage.setItem('todos',JSON.stringify(todos))
      show_todo();
    }
 }

  const add_todo=()=>{
      let title = document.getElementById("title").value;
      let desc  = document.getElementById("desc").value;
      let todos =[];
      //string

      let localTodos = localStorage.getItem("todos")
      if(localTodos!= null){
          todos= JSON.parse(localTodos) //changed string into objext
      }
      let todoObject = {
     title : title,
     desc : desc,
     id : Math.floor(Math.random()*1000),
     date: new Date().toDateString(),
      };
      todos.push(todoObject);
      localStorage.setItem("todos", JSON.stringify(todos)) //changed object to string
     show_todo();
  }
    const  show_todo=()=>
     {
      let todoString=localStorage.getItem('todos')
      let content="";
      if(todoString ==null)
      {
  content+="<h3 class='text-white'>No TODO show</h3>"
      }else{
      let todos =JSON.parse(todoString)//string to object
              for(let todo of todos.reverse())
          {
              content+=`
        <div class="card mt-2">
          <div class="card-body">
           <h3>${todo.title}</h3>
           <p>${todo.desc}</p>
           <p><small>Created on: ${todo.date}</small></p>
           <button onclick="btnDelete(${todo.id})" class="btn btn-danger flaot-start me-2">Delete</button>
          </div>
          </div>
              `
          }
      }
      document.getElementById('main-content').innerHTML = content;
    
  }
  show_todo();
