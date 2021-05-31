const express = require('express');
const router = express.Router()
const ControllerUser = require('../services/controle');
var controLlerUser = new ControllerUser();
const Usuario = require("../domain/usuario-domain")
router.use(express.json())

router.get("/usuario", async (req, res) => {
  const usuarios = await Usuario.buscarTodos();
  console.log(usuarios)
  res.json(usuarios)
})

router.post("/usuario", (req, res) => {
  let usuario = new Usuario(req.body.email, req.body.senha, req.body.nome);
  controLlerUser.adicionar(usuario)
  res.json(usuario)
})

router.put("/usuario", (req, res) => {
  controLlerUser.alterar(req.body)
  res.send('alterado')
})

router.delete("/usuario", (req, res) => {
  controLlerUser.excluir(req.params.email)
  res.send('EXcluido')
})

module.exports = router;