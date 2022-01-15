const StudentModel = require('./models')

/*
const StudentController = {
    createStudent: (req, res) => { process... }
}

module.exports = StudentController

//==> alt way

module.exports = {
        createStudent: (req, res) => { process... }
}
 */

exports.createStudent = async (req, res) => {
   try{
       const {name,roll, class: classNumber} = req.body

       const student = new StudentModel({
           name,
           roll,
           class: classNumber
       })

       const result = await student.save()

       return res.status(200).json({
           success: true,
           result
       })
   }
   catch(err){
       return res.status(400).json({error: true, reason: err })
   }
}

exports.getStudents = async (req, res) => {
    try{
        const result = await StudentModel.find()

        return res.status(200).json({
            success: true,
            result
        })
    }
    catch(err){
        return res.status(400).json({error: true, reason: err })
    }
}

exports.getStudent = async (req, res) => {
    try{
    const id = req.params.id
        if(!id)
            throw new Error('Student id is required')

        const result = await StudentModel.findById(id)

        return res.status(200).json({
            success: true,
            result
        })
    }
    catch(err){
        return res.status(400).json({error: true, reason: err })
    }
}

exports.updateStudent = async (req, res) => {
    try{
        const {name,roll, class: classNumber, isActive} = req.body

        const id = req.params.id
        if(!id)
            throw new Error('Student id is required')

        const result = await StudentModel.updateOne(
            {_id: id }, {
                $set: {
                    name, roll, classNumber, isActive
                }
            }
        )

        return res.status(200).json({
            success: true,
            result
        })
    }
    catch(err){
        return res.status(400).json({error: true, reason: err })
    }
}

exports.deleteStudent = async (req, res) => {
    try{
        const id = req.params.id
        if(!id)
            throw new Error('Student id is required')

        const result = await StudentModel.remove({_id: id})

        return res.status(200).json({
            success: true,
            result
        })
    }
    catch(err){
        return res.status(400).json({error: true, reason: err })
    }
}