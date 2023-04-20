fetch("http://universities.hipolabs.com/search?country=Italy")
.then(response => {
  console.log(`statut de la response `, response.status);
  return response.json();
})
.then(universities => {
  console.log(`univ :  `, universities);
})
.catch(error => {
  console.error(`erreur attrapée : `, error);
})