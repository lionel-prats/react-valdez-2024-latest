// C:\Users\User\Desktop\cursos\valdez-2024-latest\0-notas\pruebas.html

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element == 44;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

/* 
The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
*/