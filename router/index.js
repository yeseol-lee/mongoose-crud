const express = require('express');
const router = express.Router(); 

const ctrl = require('./../service-controller/index.js');


router.get('/without-mid/:username', function(req, res) {
  ctrl.read(req, res);
});

router.post('/mid', function(req, res) { 
  ctrl.create(req, res)
  });

router.put('/put/mid', function(req, res) {
    ctrl.update(req, res);
});

router.delete('/mid', function(req, res) {
    ctrl.delete1(req, res);
});

module.exports = router; 