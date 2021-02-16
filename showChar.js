let auteur = ['Gustave Flaubert']
let book = ['Une phrase de salammbô']

let pCount = [`Je vous présente ${auteur} un grand écrivain du 19 siècle. On le connait notamment pour le poème: '${book}'.`]
console.log(pCount)

for (let i = 0; i < pCount.length; i++) {
  console.log(`Cette phrase contient ${pCount[i].length} caractères.\n`)
}

let txt = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.\n"
console.log(txt)
for (let i = 0; i < txt.length - 1; i++) {
  console.log(`Le caractère ${txt[i]} est à l'index ${[i]}`)
}
