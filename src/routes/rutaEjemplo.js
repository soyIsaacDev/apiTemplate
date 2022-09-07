const server = require("express").Router();

const { ExampleModel } = require("../db");

server.post("/creaerusuario", async (req, res) => { 
    try {
      const { nombre, apellido} = req.body;
      const usuario = await ExampleModel.findOrCreate({
          where: {
            nombre
          },
          defaults: {
            nombre,
            apellido
          }      
      });
      res.json(usuario);
    } catch (error) {
      res.send(error);
    }
});

server.get("/usuarios", async (req, res) => {
  try {
    const usuario = await ExampleModel.findAll({
    });
    res.json(usuario);
  } catch (error) {     
    res.send(error);
  }
});

  module.exports =  server;

  
module.exports = {
  rutaEjempo: server
}