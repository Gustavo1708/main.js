const sala1 = alunos.slice(0, 10);// o aluno 10 (com índice 10) não inserido
const sala2 = alunos.slice(10);// não é necessário colocar o até o final, basta suprimir

// também pode escrever dessa maneira!!
//const sala1 = alunos.slice(alunos.length/2); // ou seja do índice 0 até a metade
//const sala2 = alunos.slice(alunos.length/2); // da metade até o final do array


console.log(sala1);
console.log(sala2);