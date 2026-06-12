const alunos = [
  { nome: "Alice", notas: [10, 9, 8] },
  { nome: "Pedro", notas: [7, 6, 8] }
]
const resultado = alunos.map(({ nome, notas }) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;
  
  return { nome, media }
})

console.log(resultado)
