function sayHelp(){
    console.log('Help me batman!');
}

//eseguire questa funzione dopo un lasso di tempo che impostaimo noi
//stiamo passando la funzione ma non la esecuzione della stessa.
setTimeout(sayHelp, 1000);
// il processo verrà eseguito in maniera asincrono, con un delay di un sec ma non bloccherà il processo

//passerà alla seconda operazione.
console.log('Batman is the best!')




function sayhelpWithName(hero){
    console.log(`help me ${hero}!`);

}
//parametri che verranno eseguiti dentro la funzione 
setTimeout(sayhelpWithName, 2000, 'Superman');

//non si fermerà, ogni tre sec eseguirà la funzione
let intervalId = setInterval(sayhelpWithName, 3000, 'Wonder Woman');

//clearTimout permette di fermare l'esecuzione

//attiviamolo con  un delay di 7 sec la cancellaione del timeout
setTimeout(() => clearTimeout(intervalId), 7000);