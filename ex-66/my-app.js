const url = 'https://jsonplaceholder.typicode.com/todos';



async function fetchTodo(){

    try{
        const response = await fetch(url);
        const commit = await response.json();
        console.log(commit);

        commit.map((item)=>{
            let listEl = document.createElement('li');
            listEl.innerHTML = item.title;
            let ulEl = document.querySelector('.todo-list');
            ulEl.appendChild(listEl);
        })

    }catch(error){
        console.log(error);
    }

}


fetchTodo();





