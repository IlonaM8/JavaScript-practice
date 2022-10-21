
const fetchButton = document.getElementById('fetch-post');
const container = document.getElementById('container');
const postTitle = document.getElementById('post-title');

fetchButton.style.backgroundColor = 'c6ffdd';









// get post from local storage
function savePost() {
    try{
        postTitle.innerHTML = window.localStorage.getItem('title');

    }catch(error){
        console.log(error);
    }
}


fetchButton.addEventListener('click', savePost);







