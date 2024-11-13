//EXERCICE 1
// let mot = "mots";
// alert(mot);

//EXERCICE 2

// let lastName = "Nom : Doe";
// let firstName = "Prénom : John";
// let city = "Ville : New-York";

// alert(lastName + "\n" + firstName + "\n" + city);

//EXERCICE 3

// let prenom = prompt("Veuillez saisir votre prénom :");
// alert("Bonjour, " + prenom );

//EXERCICE 4

// function afficherMessage() {
//     let prenom = document.getElementById("firstname").value;
//     let nom = document.getElementById("lastname").value;
//     let ville = document.getElementById("city").value;
//     alert(firsname + lastname + city);
// }

// let prenom = prompt("Veuillez saisir votre prénom :");
// let nom = prompt("Veuillez saisir votre nom :");
// let ville = prompt("Veuillez saisir votre ville :");
// alert( prenom + nom + ville);

//EXERCICE 5

// let nombre = prompt("1 nombre a virgule s'il vous plait");
// let nombre2 = prompt("1 nombre a virgule s'il vous plait");
// let entier= Math.floor(nombre);
// let resultat = entier * nombre2;

// //alert(resultat);

// //EXERCICE 6

// // Fonction pour afficher le reste de la division
// function afficherReste() {
//     // Calculer le reste de la division
//     let reste = nombre % nombre2;

//     // Afficher le reste dans une boîte de dialogue
//     alert("Le reste de la division de " + nombre + " par " + nombre2 + " est : " + reste);
// }

//EXERCICE 7

// let pointure = prompt("pointure s'il vous plait");
// let anneeNaissance = prompt("anneeNaissance s'il vous plait");

// function calculs(){
//    let mult = pointure * 2;
//    let result = mult + 5;
//    let tout = result * 50 ;
//    let soust = tout - anneeNaissance;
//    let ajouter = soust + 1766;
//    return ajouter;
// }
// console.log(calculs());

//EXERCICE 8

// let age = prompt("quel age avez vous ?");
// if (age>18){
// alert("vous etes majeur");
// }else{
//     alert("Vous etes mineur");
// }

//EXERCICE 9

// let nombre = parseInt(prompt("saisie un nombre"));
// let result = "";
// for (let i = 1; i <= 10; i++) {
//     result += nombre + ' x ' + i + ' = ' + (nombre * i) + '\n';
//    //result += nombre * i;
// }
// alert(result);

//EXERCICE 10

// let mot = prompt("saisie un mot");
// let resultat = '';
// for (let i = 0; i < mot.length; i++) {
//     resultat += mot[i] + '\n';
// }
// alert(resultat)

//EXERCICE 11


// let nombre = parseInt(prompt("saisie un nombre entre 1 et 10"));
// if (nombre < 5) {
//     alert("Le nombre saisi est inférieur à 5");
// } else if (nombre === 5) {
//     alert("Le nombre saisi est égal à 5");
// } else if (nombre > 5) {
//     alert("Le nombre saisi est supérieur à 5");
// } else {
//     alert("Le nombre saisi n'est pas valide. Veuillez entrer un nombre entre 1 et 10.");
// }


//EXERCICE 12

// function carre(nombre)
// {
//     let rcarre=nombre*nombre;
//     return rcarre;
// }
// let nombrecarre= parseInt(prompt("entrez un nombre pour avoir son carre"));
// alert(carre(nombrecarre));