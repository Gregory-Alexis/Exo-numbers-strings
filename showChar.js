let auteur = ['Gustave Flaubert']
let book = ['Une phrase de salammbô']

for (let i = 0; i < auteur.length; i++) {
  console.log(`L'auteur de cette phrase est ${auteur}`)
  for (let j = 0; j < book.length; j++) {
    console.log(`Elle est extraite du livre ${book}`)
  }
  console.log(`Ces phrases contiennent respectivement ${auteur[i].length} et ${book[i].length} caractères.\n`)
}







let txt = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."

for (let i = 0; i < txt.length; i++) {
  console.log(`Le caractère ${txt[i]} est à l'index ${[i]}`)
}
