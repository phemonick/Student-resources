'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/v1/user', _controllers.StudentController.createResource);
router.get('/v1/list', _controllers.StudentController.listResource);
router.get('/v1/finduser/:id', _controllers.StudentController.getResource);
router.post('/v1/updateresource/:id', _controllers.StudentController.updateResource);
router.post('/v1/deleteresource/:id', _controllers.StudentController.deleteResource);

exports.default = router;