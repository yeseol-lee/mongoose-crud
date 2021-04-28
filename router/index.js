const express = require('express');
const router = express.Router(); 

const ctrl = require('./../service-controller/index.js');


router.get('/:username', function(req, res) {
  ctrl.read(req, res);
});

router.post('/', function(req, res) {
    ctrl.create(req, res)
  });

router.put('/', function(req, res) {
    ctrl.update(req, res);
});

router.delete('/', function(req, res) {
    ctrl.delete1(req, res);
});

module.exports = router; 