let vetor = [5,43,79,4,3,36,258,21,25,97,5,0]

for (let pos = 0; pos < vetor.length; pos++) {  
    console.log(`A posição ${pos} contem o valor ${vetor[pos]}`);
}
vetor.sort()
console.log(`O vetor organizado fica da seguinte maneira: ${vetor}`)