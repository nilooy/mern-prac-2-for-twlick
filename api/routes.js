const {createStudent, getStudents, getStudent, updateStudent, deleteStudent} = require("./controller");
const router = require('express').Router();


// create
router.post('/create', createStudent)

// Read
router.get('/list', getStudents)

// Read One
router.get('/:id', getStudent)

// Update
router.put('/update/:id', updateStudent)

// delete
router.delete('/remove/:id', deleteStudent)

module.exports = router
