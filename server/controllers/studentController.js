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
  }

  static getStudent(req, res){
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
  }
}

export default StudentController;
