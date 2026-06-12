const usuarios = [
  { nome: "Joao", telefone: "9999-8888" },
  { nome: "Alice" },
  { nome: "Luiz", telefone: "9999-7777" }
]
const resultado = usuarios.map(({ nome, telefone = "Não informado" }) => ({
  nome,
  telefone
}))

console.log(resultado)
