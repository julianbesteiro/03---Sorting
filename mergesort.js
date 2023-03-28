function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let largo = wholeArray.length;

  if (largo % 2 == 0) {
    secondHalf = wholeArray.splice(largo / 2);

    firstHalf = wholeArray;
  } else {
    secondHalf = wholeArray.splice((largo + 1) / 2);

    firstHalf = wholeArray;
  }

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let arregloOrdenado = [];

  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      arregloOrdenado.push(firstHalf.shift());
    } else {
      arregloOrdenado.push(secondHalf.shift());
    }
  }
  //PUSH DEL ULTIMO VALOR
  if (firstHalf.length) {
    arregloOrdenado.push(firstHalf.shift());
  } else {
    arregloOrdenado.push(secondHalf.shift());
  }

  return arregloOrdenado;
}

function mergeSort(wholeArray) {
  /* tu código acá */

  let arrayFinal = [];

  if (wholeArray.length > 2) {
    let arregloDividido = split(wholeArray);

    for (let i = 0; i < arregloDividido.length; i++) {
      mergeSort(arregloDividido[i]);
    }

    let arrayFinal = merge(wholeArray[0], wholeArray[1]);
  }

  return arrayFinal;
}

//SPLIT RECURSIVO

//MERGE RECURSIVO

//RETURN ARRAY
