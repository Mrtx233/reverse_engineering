

let ot = setTimeout(function(){}, 1000000);

obj = {1: ot};

console.log(obj[88])
clearTimeout(obj[88])
console.log(123)


