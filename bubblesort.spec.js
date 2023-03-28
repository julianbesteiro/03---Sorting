describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function () {
  it("Un Arreglo desordenado que termine ordenado", function () {
    expect(bubbleSort([19, 15, 7, 9, 100, 4, 2])).toEqual([
      2, 4, 7, 9, 15, 19, 100,
    ]);
  });
});

describe("Bubble Sort", function () {
  it("Un Arreglo ordenado que debe mantenerse ordenado", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("Bubble Sort", function () {
  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe("A spy", function () {
  it("Contador de swap", function () {
    var foo = null;

    beforeEach(function () {
      foo = {
        //funcion SWAP
        setBar: function swap(array, i) {
          if (array[i] > array[i + 1]) {
            let primerNumero = array[i];
            let segundoNumero = array[i + 1];

            array[i] = segundoNumero;
            array[i + 1] = primerNumero;

            // contador++;
          }
        },
        //funcion bubbleSort
        setBar2: function bubbleSort(array) {
          //REEMPLAZO POR FOR

          for (let i = 0; i < array.length; i++) {
            for (let i = 0; i < array.length; i++) {
              if (array[i + 1]) {
                //CONTADOR
                swap(array, i);
              }
            }
          }

          console.log(array);
          console.log(contador);
          return array;
        },
      };

      spyOn(foo, "setBar").and.callThrough();
      foo.setBar2();
      expect(foo.setBar.calls.count()).toEqual(16);
    });
  });
});
