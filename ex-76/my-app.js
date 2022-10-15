const heroWoman = document.getElementById('test-hero');



//calback
function redColor(){
    heroWoman.style.backgroundColor = 'red';
   
}


function transparentColor(){
    heroWoman.style.backgroundColor = 'transparent';
    
}


heroWoman.addEventListener('mouseover', redColor);

heroWoman.addEventListener('mouseout', transparentColor);








//solved 

const otherHero = document.getElementsByClassName('hero-list-item');

// turn red the first el
// otherHero[0].addEventListener('mouseover', function turnRed(){
//     console.log('Hello Hero');
//     otherHero[0].style.backgroundColor = 'red';
// })

//turn red all elements
for(const el of otherHero){
    el.addEventListener('mouseover', function turnRed(){
        console.log('hi there, is this working?');
        el.style.backgroundColor = 'red';
        
    })
}


//turn trasparent all elements
for(const el of otherHero){
    el.addEventListener('mouseout', function turnTrasp(){
        console.log('is this normal?');
        el.style.backgroundColor = 'transparent';
        
    })
}











