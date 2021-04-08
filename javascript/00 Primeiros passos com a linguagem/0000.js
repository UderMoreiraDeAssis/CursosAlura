console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan";
const apresentacao = `Meu nome é ${nome} ${sobrenome}`;
console.log('apresentacao:', apresentacao);

console.log(nome, sobrenome);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log('listaDeDestinos:', listaDeDestinos);
console.log('listaDeDestinos.push(`Curitiba`):', listaDeDestinos.push(`Curitiba`));
console.log('listaDeDestinos.pop():', listaDeDestinos.pop());
console.log('listaDeDestinos.push(`Curitiba`):', listaDeDestinos.push(`Curitiba`));
console.log('listaDeDestinos.shift():', listaDeDestinos.shift());
console.log('listaDeDestinos:', listaDeDestinos);
console.log('listaDeDestinos.unshift(`Salvador`):', listaDeDestinos.unshift(`Salvador`));
console.log('listaDeDestinos:', listaDeDestinos);
console.log('listaDeDestinos.splice(2,0,`Brasília`):', listaDeDestinos.splice(2,0,`Brasília`));
console.log('listaDeDestinos:', listaDeDestinos);
console.log('listaDeDestinos.splice(2,1):', listaDeDestinos.splice(2,1));
console.log('listaDeDestinos:', listaDeDestinos);
let listaDeDestinosCopy = listaDeDestinos.slice()
console.log('listaDeDestinosCopy:', listaDeDestinosCopy);
console.log('listaDeDestinosCopy.slice(1, listaDeDestinosCopy.length -1):', listaDeDestinosCopy.slice(1, listaDeDestinosCopy.length -1));
console.log('listaDeDestinos:', listaDeDestinos);

var iterator = listaDeDestinos.values()
// Here all the elements of the array is being printed.
for (let elements of iterator) {
console.log(elements);
}
iterator = listaDeDestinos.values()
console.log('iterator.next().value:', iterator.next().value);
console.log('iterator.next().value:', iterator.next().value);
console.log('iterator.next().value:', iterator.next().value);
console.log('iterator.next().value:', iterator.next().value);

console.error
console.log('console.error:', console.error);
