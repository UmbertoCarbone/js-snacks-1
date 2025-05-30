let dispari = []


for (let i = 0; i < 6; i++) {
    let numero = Number(prompt("Pari o Dispari"))

    if (numero % 2 !== 0) {
        dispari.push(numero)
    }
}
console.log(dispari)