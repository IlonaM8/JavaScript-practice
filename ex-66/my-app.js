
const url = 'https://jsonplaceholder.typicode.com/todos';


const getTodo = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(response.ok){
            const jsonResponse = await response.json();       
        }
    } catch(error){
        console.log(error);
    }
};
