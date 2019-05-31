var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Apartado de teoría básica */

//Apartado:
router.get("/teoria", function(req, res, next) {
  res.redirect('/html/TeoriaBasica.html');
});

//Componentes básicos:
router.get("/teoria/componentes", function(req, res, next) {
  res.redirect('/html/cbSI.html');
});

//Definiciones:
router.get("/teoria/definiciones", function(req, res, next) {
  res.redirect('/html/disi.html');
});

//Información útil
router.get("/teoria/info", function(req, res, next) {
  res.redirect('/html/iu.html');
});

/* Apartado de tipos de sistemas */

//Apartado:
router.get("/tipos", function(req, res, next) {
  res.redirect('/html/tipos.html');
});

//TPS:
router.get("/tipos/tps", function(req, res, next) {
  res.redirect('/html/tps.html');
});

//CRM:
router.get("/tipos/crm", function(req, res, next) {
  res.redirect('/html/crm.html');
});

//MIS:
router.get("/tipos/mis", function(req, res, next) {
  res.redirect('/html/mis.html');
});

/* Apartado de SCRUM */

//Apartado:
router.get("/metodologias", function(req, res, next) {
  res.redirect('/html/metodologiaScrum.html');
});

//Scrum:
router.get("/metodologias/scrum", function(req, res, next) {
  res.redirect('/html/scrum.html');
});

//Metodología Ágil:
router.get("/metodologias/agil", function(req, res, next) {
  res.redirect('/html/metodologiaAgil.html');
});

//Roles:
router.get("/metodologias/roles", function(req, res, next) {
  res.redirect('/html/roles.html');
});

//Herramientas:
router.get("/metodologias/herramientas", function(req, res, next) {
  res.redirect('/html/herramientas.html');
});

/* Apartado de páginas personales */

//Apartado:
router.get("/personales", function(req, res, next) {
  res.redirect('/html/personales.html');
});

//Rafa:
router.get("/personales/rafa", function(req, res, next) {
  res.redirect('/html/hernandez.html');
});

//Axel:
router.get("/personales/axel", function(req, res, next) {
  res.redirect('/html/pantoja.html');
});

//Diego:
router.get("/personales/diego", function(req, res, next) {
  res.redirect('/html/rocha.html');
});

//Yanela:
router.get("/personales/yanela", function(req, res, next) {
  res.redirect('/html/santiago.html');
});

//Jackie:
router.get("/personales/jackie", function(req, res, next) {
  res.redirect('/html/toledo.html');
});

module.exports = router;
