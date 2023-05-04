
//? Ecrire une boucle qui recherche le plus grand nombre dans un tableau

// // je declare le tableau
// const tab = [10, 50, 1000, 150, 0, -1];
// //je declare la ma variable du plus grand nombre
// let plusGrandNombre=tab[0];
// //je creer ma boucle pour parcourir le tableau
// for(let i=0; i < tab.length; i++){
//     //Donc i represente l'index de mon tableau
//     //Donc i < tab.length cette condition permet d'executer ma boucle tant que cest true et s'arretera lorsque  cest false 
//    // i++ increment l'index de mon tableau a chaque eteration de la boucle    
//   if(tab[i] < plusGrandNombre) {
//     plusGrandNombre=tab[i] 
//   }
// }
// console.log(`plusGrandNombre: ${plusGrandNombre}`);

//? Ecrire une boucle qui inverse une chaine de caractere

// let maChaine= "Hello world!";

// // const newChaine=maChaine;
// let inversedChaine="";
// // console.log(Boolean(inversedChaine))
// let index =maChaine.length-1

//     for (index; index >=0; index--){
//      inversedChaine +=maChaine[index];
//     }
//     console.log(inversedChaine)

//     let number =5;
//   number +=6;

// const text= "Je suis aller visite paris,mais paris n'est calme";

// //? mettre la en mscule
// //? replacer paris new york

// console.log(text)
// console.log(text.toUpperCase())
// console.log(text.replaceAll("paris","new york"))
// console.log(text.slice(20,26))
// console.log(text.charAt(text.length-1))

//array
//concat slice length split push unshift pop shift toString join

// const fruits=["Banana","Mango","Cerise","Apple"]
 //console.log(fruits.join("$"))

// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

//console.log alert prompt 

// function name(){
//     //corps de la fonction
// }

// //declare function
// function sayHi (){
//     alert("Bonjour john  ravie de te revoir")
// }

// //appeler function
// sayHi();

// function sayHi(firstName,lastName){
//     alert(` Bonjour ${firstName}  ${lastName}`)
// }

// sayHi("John","Doe")
//? creer une function qui demande a l'utilisateur d'entrer son prenom puis alerter le prenom

// function askName(){
//     const name=prompt("Entrer Name")
//     alert(`bonjour ${name}`)
// }
// askName();
//? crer un function qui demande a l'utilisateur d'entrer deux  nombre faire calcul des nombres alertr le resultat

// function calculNumber(){
//     const nb1=parseInt(prompt("Entrer le nombre 1")) 
//     const nb2=parseInt(prompt("Entrer le nombre 2")) 
//    const sum= nb1+nb2;
//    alert(`Le resultat du calcul est de ${sum}`)
// }

//const number=10; // number est declarer global
     

// function calculate(){
//   return console.log("number dans la function",number)
//   alert("Number")
//   alert("Number")
//   alert("Number")
// }

// const  calculate=()=> console.log("number dans la function",number)
// calculate();
 
// calculNumber();

//   let calculNumber = ()=>{
//      console.log(this)
//   }

//  calculNumber();

// const person={
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName:function(){
//          console.log(this.firstName  + ' ' + this.lastName)
//     }
// }

//? ecrire le divinet
//? Demande au user d'entre un nombre si le nombre est supperieur a divinet afficher nombre trop ,
//? sinon if le nombre est inferieur
//? devinet afficher le nombre est petit sinon afficher bravo vous avez trouver divinet
//? ajouter un compteur d'essaye si le user a effectuer 5 tentative affiche desoler avous echouer

//generate un random number compris entre 1 a 10
const divinet=Math.floor(Math.random() *10)+1;

//compteur qui le nombres de tentatives
let compteur=5;

//checkNumber permet de verifier le nombre entre par le user et dafficher un message pour ccondition rempli
// function checkNumber(number){
//     compteur--;
//     if(compteur ===0){
//       return  alert("Desoler vous avez atteint le nombre autoriser")
//     }
//     if(number > divinet){
//         alert("Nombre trop grand")
//     }else if(number < divinet ){
//         alert("Nombre trop petit")
//     }else{
//         alert("Bravo vous avez trouver le divinet")
//     }
// }
//  let number;
    
// //  while(number != divinet ){
// //     number=parseInt(prompt("Entrer votre nombre"))
// //     checkNumber(number)
// //  }

// do {
//      number=parseInt(prompt("Entrer votre nombre"))
//      checkNumber(number)
// }while(number !== divinet && compteur !== 0 )

// for in for of
//for(key in data){}
// const person={
//     firstName: 'John',
//     lastName: 'Doe',
//     ema:"nd@yahoo.com",
// }

// for(let x in person){
//     console.log(person[x])
// }

// const numbs=[1,5,2,56,4]

// for(let number of numbs){
//     console.log(number)
// }
// for(let number in numbs){
//     console.log(numbs[number])
// }


// const fruits=["Banana","Mango","Cerise","Apple"]
// const numbers=[40,100,1,5,25,-1]
//trier un array 
// fruits.push("fraise","poires")
// console.log(numbers.sort((a,b)=>a-b))
//? ajouter fraise poires dans le tableau

//?  affiche tous les elements du  tableau
// console.log(fruits)
// for(let i in fruits){
//     console.log(fruits[i])
// }
// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let fruit of fruits){
//     console.log(fruit)
// }

//forEach
// function myFunction(value,index,array){
//  console.log(value)
// }
// fruits.forEach((fruit)=> console.log(fruit));


// const fruits=["Banana","Mango","Cerise","Apple"]

// //? supprimer Banana et affiche tous les elements du tableau avec for of
// // fruits.forEach((macron)=>console.log(macron))

// fruits.shift()
// for (const fruit of fruits){
//     console.log(fruit)
// }

//? Ecrire une fonction qui prend un tableau de nombres comme argument et
//?  qui utilise la méthode forEach pour afficher chaque nombre dans la console.

//? Ecrire une fonction qui prend un tableau de nombres comme argument et
//?  qui utilise la méthode map pour retourner un nouveau tableau avec chaque nombre multiplié par deux.
