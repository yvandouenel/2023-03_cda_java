fetch("http://universities.hipolabs.csdfom/search?country=Italy")
.then(response => {
  console.log(`statut de la response `, response.status);
  return response.json();
})
.then(universities => {
  console.log(`universities `, universities);
})
.catch(error => {
  console.error(`erreur attrapée : `, error);
})