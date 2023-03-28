describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5, 6, 7])).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    expect(merge([1, 4, 6], [2, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("MergeSort", function () {
  it("es capaz de splittear un arreglo y mergearlo ordenado", function () {
    // testeá el algoritmo
    expect(mergeSort([1, 4, 6, 2, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
