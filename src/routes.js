const router = require('express').Router();
const TestController = require('@controllers/teste-controller');

router.get('/', TestController.JesusMestre);


module.exports = router;
