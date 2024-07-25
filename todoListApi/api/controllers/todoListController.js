//1st way
// const mongoose = require('mongoose')
// const taskModel = mongoose.model('taskModel')

//2nd way
const taskModel = require('../models/taskModel')

//Feature: view all tasks
//Method : GET
const view_all_tasks = async () => {
   tasks = await taskModel.find({})
   res.json(tasks)
}

const view_task_by_id = async (taskId) => {
   task = await taskModel.findById(taskId)
   res.json(task)
}

module.exports = {
   view_all_tasks,
   view_task_by_id
}