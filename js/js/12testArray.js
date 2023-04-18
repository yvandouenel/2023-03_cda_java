const fruits = ["Cerise", "Pomme"];
//const fruits = new Array("Cerise", "Pomme");
console.log(`fruits`, fruits);
console.log(`Taille du tableau :`, fruits.length);

// Ajout d'un élément à un tableau
console.log(fruits.push("Fraise"));

console.log(`fruits[1]`, fruits[1]);
// parcours du tableau fruits
fruits.forEach((fruit, index) => {
  console.log(`fruit (index/valeur):`, index, fruit);
});

const fruitsLi = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(`fruitsLi : `, fruitsLi);
