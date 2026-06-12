class Usuario {
  constructor(nome, email) {
    this.nomeUsuario = nome
    this.emailUsuario = email
  }
}

class Relatorio {
  gerar(usuarios) {
    return usuarios.map(({ nomeUsuario, emailUsuario }) => `${nomeUsuario} - ${emailUsuario}`)
  }
}

const usuarios = [
  new Usuario("Roberto", "roberto@gmail.com"),
  new Usuario("Pablo", "pablo@gmail.com")
]

const relatorio = new Relatorio()

console.log(relatorio.gerar(usuarios))
