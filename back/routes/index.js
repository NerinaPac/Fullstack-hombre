var express = require('express');
var router = express.Router();

// Importamos nuestra api
const api = require('../api');

/* GET home page. */
/* router.get('/libros', async (req, res) => {
  const libros = await api.getBooks();
  res.send(libros);
});

router.get('/libro/:id', async (req, res) => {
  // Le enviamos como parámetro el ID del libro que quiere ver el usuario
  const libro = await api.getBookById(req.params.id);
  res.send(libro);
});

// Mostrar el listado en JSON de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();
  res.send(autores);
}); */
/* ===================================================================================== */

/* POST agregar-denuncia */
router.post('/agregar-exposicion', async (req, res) => {
  let {nombre, apellido, fechaDeNacimiento, email, telefono, exposicion} = req.body;

  // titulo, precio, portada, autorId
  await api.insertExpo(nombre, apellido, fechaDeNacimiento, email, telefono, exposicion);

  res.redirect('/denuncia');
 /* s */
});


module.exports = router;
