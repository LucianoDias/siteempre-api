const router = require('express').Router();
const TestController = require('@controllers/teste-controller');

router
  .get('/', TestController.JesusMestre)
  .post('/', TestController.createSomeone);


module.exports = router;
