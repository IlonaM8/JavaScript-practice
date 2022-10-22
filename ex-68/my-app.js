const url = 'https://jsonplaceholder.typicode.com/posts';


const todoTitle = document.getElementById('todo-title');
const todoComplete = document.getElementById('todo-completed');
const buttonSubmit = document.getElementById('submit-todo');


const submitTodo = async() => {
    const SubmitResponse = buttonSubmit.value;

    try{
            const response = await fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json; charset = utf-8'
                    },
                    body: JSON.stringify({
                        title: todoTitle.value,
                        completed: todoComplete.checked
                    })
        
                });
                const content = await (response.json());
                console.log(content);
        
    }catch(error){
                console.log(error);
    }

}

const addEventSubmit = (event) => {
    event.preventDefault();
    submitTodo();
}

buttonSubmit.addEventListener('click', addEventSubmit);









