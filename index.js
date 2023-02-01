

function scalarProduct(V1, V2) {
  let SP = 0;
  for (let i = 0; i < V1.length; i++) {
    SP += V1[i] * V2[i];
  }
  return SP;
}


let Vectors = [[7,5,6], [5,5,2], [2,3,8], [0,0,0]];
let vector1 = Vectors[0];
let vector2 = Vectors[1];
let result = scalarProduct(vector1, vector2);
console.log(result);