'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var student = _models2.default.Student;

var StudentController = function () {
  function StudentController() {
    _classCallCheck(this, StudentController);
  }

  _createClass(StudentController, null, [{
    key: 'createResource',
    value: function createResource(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          matricId = _req$body.matricId,
          sex = _req$body.sex,
          department = _req$body.department,
          email = _req$body.email,
          phone = _req$body.phone,
          level = _req$body.level;

      student.findOrCreate({ where: { matricId: matricId, email: email, phone: phone }, defaults: { name: name, sex: sex,
          department: department, level: level
        }

      }).spread(function (resource, created) {
        if (created) {
          console.log(resource.get({
            plain: true
          }));
          return res.status(200).send(resource);
        } else {
          return 'user already exist';
        }
      }).catch(function (err) {
        res.status(500).send(err);
      });
    }
  }]);

  return StudentController;
}();

exports.default = StudentController;