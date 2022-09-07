//Direccionamiento con Express
    //https://expressjs.com/es/guide/routing.html
    
    const express = require('express');
    const app = express();
    
    const { rutaEjempo } = require('./src/routes/rutaEjemplo');
    
    /* app.METHOD(PATH, HANDLER)
    app es una instancia de express.
    METHOD es un método de solicitud HTTP.
    PATH es una vía de acceso en el servidor.
    HANDLER es la función que se ejecuta cuando se correlaciona la ruta. */

    // app.use([path,] callback [, callback...])    --> http://expressjs.com/es/api.html#app.use
    //   nos permite montar middlewares a la ruta especificada  
    //                                  si no se espcifican rutas se montara el middleware en toda la aplicacion
    
    

    app.use(express.json()); //  -->  habilitamos objetos json con el metodo express.json   
    
    app.use(express.static('public')) // --> habilitamos archivos estaticos con el middleware express.static
        //para crear un prefijo en la ruta 
    app.use("/assets", express.static(__dirname + "/public"));
    //El único parámetro que recibe static es el nombre del directorio donde están los archivos estáticos, en nuestro ejemplo están en /public.
    
    
    app.get("/", (req,res) => {
        res.send("Hola, el servidor esta activo");
    });
    
    //habilitamos todos los metodos HTTP en la ruta
    app.use("/ruta", rutaEjempo);
    
    //Error handling middleware
    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(err.status || 500).send(err.message);
    });
    
    module.exports = app;
    