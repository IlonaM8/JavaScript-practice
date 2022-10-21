const url = 'https://jsonplaceholder.typicode.com/todos/4';

const container = document.getElementById('container');


async function fetchTodo(){

    try{
        const response = await fetch(url);
        const commit = await response.json();
        console.log(commit);

        
            

            //title h2
            const h2 = document.createElement('h2');
            h2.innerHTML = commit.title;
            h2.style.color = 'green'
            container.appendChild(h2);

            //chechbox
            const chechbox = document.createElement('input');
            chechbox.type = 'checkbox';
            chechbox.checked = 'checked'

            chechbox.innerHTML = commit.completed;
            container.appendChild(chechbox);
            
     

    }catch(error){
        console.log(error);
    }

}


fetchTodo();





