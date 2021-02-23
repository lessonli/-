let n = 10;


Number.prototype.plus = function (number){
  return this+ number
}
Number.prototype.minus = function (number){
  return this - number
}

let m = n.plus(10).minus(5);
console.log(m);//=>15（10+10-5）