"use strict";
/**
 * Fonction constructeur appelée via this
 *  this qui représente l'instance en cours
 *  le retour est implicite et c'est une référence à l'instance qui
 * vient d'être créée
 *  Mise en place du mécanisme des prototypes
 * */
function Person(firstname, lastname) {
  // propriétés directes de type string
  this.firstname = firstname;
  this.lastname = lastname;

  this.specy = "Monster";
}
// Utilisation du prototype de la fonction constructeur

Person.prototype.introduceMyself = function () {
  console.log(
    `Bonjour, je m'appelle ${this.firstname} ${this.lastname} et j'appartiens à l'espèce ${this.specy}`
  );
};
Person.prototype.specy = "Human";
Object.prototype.specy = "Animal";

/* instanciation via le mot clé new. C'est cette syntaxe qui permet de déclencher tous les mécanismes liés à la Programmation Orientéé Objet

*/
const bob = new Person("Bob", "Dylan");
const joe = new Person("Joe", "Star");
console.log(`bob : `, bob);
console.log(`Joe : `, joe);
// appel de la méthode introduceMyself depuis une instance
// le point indique que je fais appel à une propriété
bob.introduceMyself();
joe.introduceMyself();

function test() {}
const t = new test();
console.log(`t  : `, t);
console.log(`t.specy  : `, t.specy);
