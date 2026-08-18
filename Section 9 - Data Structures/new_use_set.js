const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);


const commonFoods = italianFoods.intersection(mexicanFoods)

console.log([...commonFoods])


const italianMexicanFusion = italianFoods.union(mexicanFoods)

console.log('Union: ', italianMexicanFusion)


const uniqueItalianFoods = italianFoods.difference(mexicanFoods)


console.log('Diferrence italian:', uniqueItalianFoods)


const uniqueMexicanFoods = mexicanFoods.difference(italianFoods)


console.log('Diferrence mexican:', uniqueMexicanFoods)


const uniqueItalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)

console.log(uniqueItalianMexicanFoods)


console.log(italianFoods.isDisjointFrom(mexicanFoods))