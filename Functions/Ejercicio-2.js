//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord() {
    let largestWord = "";
    for (let avenger of avengers) {
        if (avenger.length > largestWord) {
            largestWord = avenger;
            }
            
    } console.log(largestWord);
  }

  findLongestWord(avengers);
  
  