
// @dec Get goals
//@route GET /api/goals
//@access  Provate
const getGoals = (req, res) =>{
    res.status(200).json({message : "Get Goals"})
    
}
// @dec Get goals
//@route GET /api/goals
//@access  Provate
const setGoal = (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('PLease add a text field')}
    res.status(200).json({message : "Set Goals"})
    
}
// @dec Get goals
//@route GET /api/goals
//@access  Provate
const updateGoal = (req, res) =>{
    res.status(200).json({ message : `Update Goal ${req.params.id}`})
}
// @dec Get goals
//@route GET /api/goals
//@access  Provate
const deleteGoal = (req, res) =>{
    res.status(200).json({message :`deleteGoal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}


