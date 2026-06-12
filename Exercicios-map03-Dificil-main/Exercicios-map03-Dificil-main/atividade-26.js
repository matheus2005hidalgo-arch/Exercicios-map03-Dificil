const estoque = [
  { nome: "Bermuda", preco: 60, quantidade: 7 },
  { nome: "Calca", preco: 120, quantidade: 14 }
]
const resultado = estoque.map(item => ({
  ...item,
  totalItem: item.preco * item.quantidade
}))

console.log(resultado)
