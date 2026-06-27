const readlineSync=require('readline-Sync');
function fact(n){
let fact=1;
for(let i=n;i>=1;i--){
  fact*=i;
}
  return fact;
}
let n=readlineSync.questionInt("Enter a number:");
console.log(fact(n));
