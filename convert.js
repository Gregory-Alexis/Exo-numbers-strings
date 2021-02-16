let binaire = [];
let octale = [];
let hexa = [];


let convert = [10, 15, 16, 5005, 52390903]
for (let i = 0; i < convert.length; i++) {
  binaire.push(convert[i].toString(2))
  octale.push(convert[i].toString(8))
  hexa.push(convert[i].toString(16))
}
console.log(binaire)
console.log(octale)
console.log(hexa)
