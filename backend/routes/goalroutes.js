const  express = require('express')
const router = express.Router()

// imports the controllers we created (getGols function exported)
const {getGoals,setGoal,updateGoal,deleteGoal}  = require('../controllers/goalController')

module.exports = router


router.get('/', getGoals)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)