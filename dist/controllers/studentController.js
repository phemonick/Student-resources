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
				if (!created) {
					return res.status(301).send('user already exist');
				}
				console.log('result is ' + resource.get({
					plain: true
				}));
				return res.status(200).send(resource);
			}).catch(function (err) {
				res.status(500).send(err);
			});
		}
	}, {
		key: 'listResource',
		value: function listResource(req, res) {
			student.findAll().then(function (allResource) {
				if (!allResource) {
					return res.status(404).send('no resource found');
				}
				return res.status(200).send({
					message: 'success',
					result: allResource
				});
			}).catch(function (err) {
				return res.status(500).send(err);
			});
		}
	}, {
		key: 'getResource',
		value: function getResource(req, res) {
			var id = req.params.id;

			student.findById(id).then(function (resource) {
				if (!resource) {
					return res.status(400).send({
						message: 'failure',
						result: 'user not found'
					});
				}
				return res.status(200).send({
					message: 'success',
					result: resource
				});
			}).catch(function (err) {
				return res.status(500).send(err);
			});
		}
	}, {
		key: 'updateResource',
		value: function updateResource(req, res) {
			var id = req.params.id;
			var _req$body2 = req.body,
			    name = _req$body2.name,
			    matricId = _req$body2.matricId,
			    sex = _req$body2.sex,
			    department = _req$body2.department,
			    email = _req$body2.email,
			    phone = _req$body2.phone,
			    level = _req$body2.level;

			student.findById(id).then(function (resource) {
				if (!resource) {
					return res.status(404).send({
						message: 'failure',
						result: 'student not found'
					});
				}
				student.update({
					name: name, matricId: matricId,
					sex: sex, department: department,
					email: email, phone: phone, level: level
				}, {
					where: {
						id: id
					}
				}).then(function (resource) {
					return res.status(200).send({
						message: 'success',
						result: resource
					});
				});
			}).catch(function (err) {
				return res.status(500).send(err);
			});
		}
	}, {
		key: 'deleteResource',
		value: function deleteResource(req, res) {
			var id = req.params.id;


			student.findById(id).then(function (resource) {
				if (!resource) {
					return res.status(404).send({
						message: 'cant be deleted'
					});
				}
				student.destroy({
					where: {
						id: id
					}
				}).then(function (resource) {
					res.status(200).json({
						message: 'successfully deleted',
						result: resource
					});
				});
			}).catch(function (err) {
				return res.status(500).send(err);
			});
		}
	}]);

	return StudentController;
}();

exports.default = StudentController;