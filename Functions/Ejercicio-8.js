//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let repetidos = [];
    for (let word of counterWords){
       repetidos[word] = (repetidos[word] || 0) + 1;
    }console.log(repetidos);
}

repeatCounter(counterWords);


//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 


/* function repeatCounter(param) {
  let repetidos = [];
  //counterWords.forEach(function(word) {
    for (let word of counterWords) {
     repetidos[word] = (repetidos[word] || 0) + 1;
    } 
} 
console.log(repeatCounter(repetidos));

//repeatCounter(counterWords); */

