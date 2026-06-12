const ids = [1, 2, 3];
const nomes = ["Luiz", "Alice", "Joao"]
const usuarios = ids.map((id, indice) => ({
  id,
  nome: nomes[indice]
}));

console.log(usuarios)
