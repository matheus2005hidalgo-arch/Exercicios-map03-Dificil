const configuracao = {
  tema: "dark",
  idioma: "PT-BR",
  senha: "111222333",
  notificacoes: true
}
const { senha, ...configuracaoPublica } = configuracao

console.log(configuracaoPublica)
