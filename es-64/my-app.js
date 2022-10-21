const fetchButton = document.getElementById('fetch-post');
const saveButton = document.getElementById('save-post');
const container = document.getElementById('container');
let obj;

fetchButton.style.backgroundColor = 'c6ffdd';
saveButton.style.backgroundColor = 'fbd786'



//fetch post 
async function fetchPost() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        obj = await response.json();
        console.log(obj);

    }catch(error){
        console.log(error);
    }
}

//event listener
fetchButton.addEventListener('click', fetchPost);


// save in local storage

function savePost() {
    try{
        
        for (const [key, value] of Object.entries(obj)) {
            window.localStorage.setItem(key, value);   
        }
        console.log('Your post has been saved in Local Storage');

    }catch(error){
        console.log(error);
    }
}

saveButton.addEventListener('click', savePost);


