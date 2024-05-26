let inpt1 = document.getElementById("inpt1")
let inpt2 = document.getElementById("inpt2")
let table = []
let table$$ = document.getElementById('table$$')
function muti() {

   if (inpt1.value > inpt2.value){
      table$$.innerHTML = 'Input one should be lesser than input two'
   } else {
    for (let i = inpt1.value; i <= inpt2.value; i++) {
        for (let j = 1; j <= 12; j++) {
            table.push((`${i} * ${j} = ${i * j}`))
        }
    }
    table$$.innerHTML = `<p>${table}</p>`
   }
}

