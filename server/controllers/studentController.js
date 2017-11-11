import db from '../models';

const student = db.Student;

class StudentController {

  static createResource(req, res){
    const {name, matricId, sex, department, email, phone, level } = req.body;
    student.
        findOrCreate({where: {matricId, email, phone}, defaults:{name: name, sex: sex,
           department: department, level: level,
        }

      }).spread((resource, created) => {
        if(created){
          console.log('result is '+resource.get({
            plain: true,
          }))
          return res.status(200).send(resource)
        }
        else{
          return 'user already exist';
        }
      }).catch((err) => {
        res.status(500).send(err)
      })

  }
  static listResource(req, res){
    student.findAll()
    .then((allResource) => {
      if(!allResource){
        return res.status(404).send('no resource found');
      }
      return res.status(200).send({
        message: 'success',
        result: allResource
      })
    })
    .catch((err) => res.status(500).send(err))
  }

  static getResource(req, res){
    const { id } = req.params;
    student.findById(id)
    .then((resource) => {
      if(!resource){
        return res.status(400).send({
          message: 'failure',
          result: 'user not found'
        })
        return res.status(200).send({
          message: success,
          result: resource
        })
      }
    })
    .catch((err) => res.status(500).send(err))
  }
  static updateResource(req, res){
    const { id, name, matricId, sex, department, email, phone, level } = req.body;
    student.findById(id)
    .then((resource) => {
      if(!resource){
        return res.status(404).send({
          message: 'failure',
          result: 'student not found'
        })
      }
      student.update({
        name, matricId,
         sex, department,
          email, phone, level
      }, {
        where: {
          id
        }
      })
      .then((resource) => {
        return res.status(200).send({
          message: 'success',
          result: resource
        })
      })
    }).catch((err) => res.status(500).send(err))
  }

  static deleteResource(req, res){
    const {id} = req.body;

    student.findById(id)
    .then((resource) => {
      if(!resource){
        return res.status(404).send({
          message: 'cant be deleted',
        })
      }
      student.destroy({
        where: {
          id
        }
      })
      .then((resource) => {
        res.status(200).json({
          message: 'successfully deleted',
          result: resource,
        })
      })
    })
    .catch(err => res.status(500).send(err));
  }
}

export default StudentController;
