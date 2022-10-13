// // traversing

// const htmlEl = document.documentElement;
// const bodyEl = document.body;
// const headEl = document.head;

// console.log(htmlEl);
// console.log(bodyEl);
// console.log(headEl);

// console.log(document.body.childNodes.length); //9
// console.log(document.body.children.length); //3

// //ulteriori elementi in dettaglio
// console.log('firstChild', document.body.firstChild); 
// console.log('lastChild', document.body.lastChildChild); 
// console.log('nextSibling', document.head.nextSibling); 
// console.log('previousSibling', document.head.previousSibling); 
// console.log('parentNode', document.head.parentNode); 



let pElId = document.getElementById('p-elem');
console.log('pElId', pElId);

const pEl = document.querySelectorAll('p');
console.log('pEl', pEl);

pElId = document.querySelector('#p-elem');
console.log('pElId', pElId);


const liEl = document.querySelector('li');
console.log('liEl', liEl);
const ulClosest = liEl.closest('ul');
console.log('ulClosest', ulClosest);





console.log('nodeType', liEl.nodeType );
console.log('nodeName', liEl.nodeName );
console.log('tageName', liEl.tagName );

liEl.innerHTML = '<p>Prova Testo</p>';
liEl.hidden //è una proprietà - andrà a nascondere l'eelemento


console.log('data', liEl.data); //prendere cosa contine quel nodo.
console.log('textContent', liEl.textContent);

// elem.outerHTML // oltre al contenuto ci darà anche il tag stesso

//role - attributo di accessibilità
liEl.setAttribute('role', 'test');
console.log('hasAttribute', liEl.hasAttribute('role'));
console.log('getAttribute', liEl.getAttribute('role'));
console.log('removeAttribute', liEl.removeAttribute('role'));

liEl.setAttribute('data-test', 'test');
console.log('dataset', liEl.dataset.test); //


// nuovi modi del DOM

//1. creiamo l'elemento
const textNode = document.createTextNode('Un nodo testuale');
const newLiNode = document.createElement('li');

//aggiungi il test
newLiNode.innerHTML = 'Un nuovo nodo';

//appendi - posizionare alla fine
liEl.append(textNode); //.prepend - mettterlo all'inizio
liEl.after(newLiNode); // .before - dei side quindi prima o dopo
// .replaceWith, remove, cloneNode - clonare un elemento

//dove posizionare e l'html e il testo:
liEl.insertAdjacentElement('beforeBegin', '<p>Ancora un altro LI</p>');





//classi e stili
liEl.className = 'my-class';
liEl.classList.add('my-li');


//i stili possiamo modificare i valori degli stili
liEl.style.backgroundColor = 'green';


//ci ritornerà tutte i valorei delle regole CSS già computarizzate dal browser

const computerStyle = getComputedStyle(document.body);

// eventi

peElId.onclick = function () {
    console.log('Clica da assegnazione al metodo');
};

function handler(){
    console.log('un click da evenListener!');

}

liEl.addEventListener('click', handler);
//pEl.removeEventListener('click', handler);

//per agganciare un ulteriore evento
liEl.addEventListener('click', (event)=> {
    console.log('un altro click da evenListener');
    console.log('event', event);
    //event.stopPropagation(); //stop propogation
});

ulClosest.addEventListener('click', (event)=>{
    console.log('un altro Click UL da eventListener');
    console.log('taget', event.target);
});

document.querySelector('a').addEventListener(
    'click',
    (event) => event.preventDefault() // prevenire comportamenti preimpostati dal browser
    //return false; // stessa cosa 
);


//query selector
let x = document.querySelector('button') //tag name button
let y = document.querySelector('#buttone') // l'id buttone
let z = document.querySelector('.prova') //prende la classe



// query selector all
let querySelectorAllmyEl = document.querySelectorAll('.prova') //prende tutte le classi prova

//className
let classNameEl = document.getElementsByClassName('prova') // il nome della classe


// sia query selelctor all che hetelemntbyclassname ci ritorna un array di elementi
//possiamo accederli tramite l'indice
console.log('className', classNameEl[0]);
console.log('querySelectorAllmyEl', querySelectorAllmyEl[2]);


// come creiare nuovi nodi?
