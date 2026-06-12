const clientes = [
  { nome: "Alice", endereco: { cidade: "Sao Paulo" } },
  { nome: "Luiz", endereco: { cidade: "Caieiras" } }
]
const resultado = clientes.map(({ nome, endereco: { cidade } }) => ({
  nome,
  cidade
}))

console.log(resultado)
