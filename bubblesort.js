function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1]) {
        swap(array, i);
      }
    }
  }

  console.log(array);
  return array;
}

function swap(array, i) {
  if (array[i] > array[i + 1]) {
    let primerNumero = array[i];
    let segundoNumero = array[i + 1];

    array[i] = segundoNumero;
    array[i + 1] = primerNumero;
  }
}

//inicio
//[19, 15]

//inicio
//[19, 15, 7, 9, 100, 4, 2]

// [7, 9, 15, 19, 100, 4, 2]

// fin actual
// [7, 9, 15, 4, 2, 19, 100]

// fin deseado
// [2, 4, 7, 9, 15, 19, 100]

// function bubbleSort(array) {
//   while (array[0] > array[1]) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i + 1]) {
//         if (array[i] > array[i + 1]) {
//           swap(array, i);
//         }
//       }
//     }
//   }

//   console.log(array);
//   return array;
// }
