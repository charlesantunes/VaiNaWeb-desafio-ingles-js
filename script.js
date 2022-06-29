// //Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy 

// //Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

// *DESAFIO EXTRA* 

// //Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 

// Entregue pelo VS e github! 

// Lembrando que! ESTAMOS ONLINE para suporte hein! 

// SEE U NEXT CLASS!

let Comedy = [{
    title: "Modern Times",
    director: ":Charlie Chaplin",
    year: 1936  
},{
    title: "Deadpool",
    director: "Tim Miller",
    year: 2016 
},{
    title: "The Naked Gun: From the Files of Police Squad!",
    director: "David Zucker",
    year: 1988
},{
    title: "O Auto da Compadecida",
    director: "Guel Arraes",
    year: 2000
}];

let Action = [{
    title: "Matrix",
    director: " Lana Wachowski e Lilly Wachowski",
    year: 1999      
},{
    title: "Spider-Man",
    director: "Sam Raimi",
    year: 2002
},{
    title: "Constantine",
    director: "Francis Lawrence",
    year: 2005
},{
    title: "Gladiator",
    director: " Ridley Scott",
    year: 2000
}];

let Fantasy = [{
    title: "Deadpool",
    director: "Tim Miller",
    year: 2016   
   },{
    title: "The Curious Case of Benjamin Button",
    director: "David Fincher",
    year: 2008
},{
    title: "The Butterfly Effect",
    director: "Eric Bress e J. Mackye Gruber",
    year: 2004
},{
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    director: "Andrew Adamson",
    year: 2005
}];
c = Comedy;
a = Action;
f = Fantasy;
caracteres = 'caf';
let styleRadom = caracteres.charAt(Math.floor(Math.random() * caracteres.length));

if (styleRadom == 'c') {
    console.log("Random chosen style was 'COMEDY'");    
}else if (styleRadom == 'a') {
    console.log("Random chosen style was 'ACTION'"); 
}else{
    console.log("Random chosen style was 'FANTASY'");
}

let moveRadom;
switch (styleRadom) {
    case 'c':
        moveRadom = Math.floor(Math.random() * 4);
        if ((moveRadom == 0) || (moveRadom == 3) ) {
            console.log("MY FAVORIT MOVIE IS ",c[moveRadom]);
        } else {
            console.log("NOT EVEN 5 STARS ",c[moveRadom]);
        }

        break;
    case 'a':
        moveRadom = Math.floor(Math.random() * 4);
        if ((moveRadom == 0) || (moveRadom == 2) || (moveRadom == 3) ) {
            console.log("MY FAVORIT MOVIE IS ",a[moveRadom]);
        } else {
            console.log("NOT EVEN 5 STARS ",a[moveRadom]);
        }
        break;
    case 'f':
        moveRadom = Math.floor(Math.random() * 4);
        if ((moveRadom == 1) || (moveRadom == 2) ) {
            console.log("MY FAVORIT MOVIE IS ",f[moveRadom]);
        } else {
            console.log("NOT EVEN 5 STARS ",f[moveRadom]);
        }
        break;
}

