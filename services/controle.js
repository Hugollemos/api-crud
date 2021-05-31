const RepoArray = require('../repositories/repo-array')
const RepoMongo = require('../repositories/repo-mongo')

class ControllerUser{

  constructor(){
    this.repoArray = new RepoMongo()
  }

  adicionar(usuario){
    this.repoArray.adicionar(usuario)
  }

  excluir(email){
    this.repoArray.excluir(email)
  }

  alterar(usuario){
    this.repoArray.alterar(usuario)
  }

  buscar(usuario){
  }

  buscarTodos(){
    return this.repoArray.find({})
  }
}
module.exports = ControllerUser;