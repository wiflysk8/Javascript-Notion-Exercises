//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    sumaTotal = 0 ;
  for (let i = 0; i < mixedElements.length; i++) {
      if (typeof mixedElements[i] == 'number') { 
      sumaTotal = sumaTotal + mixedElements[i];
    } else if( typeof mixedElements[i] == 'string') {
        sumaTotal = sumaTotal + mixedElements[i].length;
    }
  }console.log(sumaTotal);
}

averageWord(mixedElements); 