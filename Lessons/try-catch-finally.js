
// stiamo richiamando la proprietà di un oggetto che non esiste: errore!
function sayHelp(){
    console.log(`Help me ${hero.name}`)
}

//chiamiamo la funzione e ci restituisce un errore
sayHelp();

//ecco come gestiamo la porzione di codice

function sayHelp(){

    //dentro il costrutti try: inseriamo il codice da monitorare, quello che ci da errore.
    try{
        console.log(`Help me ${hero.name}`);
        throw new Error("questo è un errore"); //erorre genereico

        //throw new SyntaxError("dati incompleti: manca nome"); //possiamo eseguire noi un errore nel caso di una determinata condizione
    } 

    //gestirlo con il costrutti catch - non interromperà il nostro codice
    //l'errore è un oggetto con delle prorpietà e quindi
    catch(err){ //raccogliemo l'eerore qui
        console.log('name', err.name); //il nome dell'errore
        console.log('message', err.message); //il messaggio che ci farà capire cosa è successo: hero is not defined
        console.log('stack', err.stack); //quale è stata la catena che ha portato a quel errore

        console.log('ReferenceError');

        if(err instanceof ReferenceError){
            console.log('ReferenceError');
        } else {
            throw err;
        }

    }
    console.log('Lorem Ipsom'); //lo script non si è interrotto, continua. 


}

try{
    sayHelp();
} catch(err){
    console.log(`external catch: ${err}`);
} finally{
    console.log( 'Finally' );
}

