//1st way
// const mongoose = require('mongoose')
// const taskModel = mongoose.model('taskModel')

//2nd way
const taskModel = require('../models/taskModel')

//Feature: view all tasks
//Method : GET
const view_all_tasks = async (req, res) => {
   try {
      tasks = await taskModel.find({})
      res.json(tasks)
   } catch (err) {
      res.send(err)
   }
}

const view_task_by_id = async (req, res) => {
   try {
      id = req.params.taskId
      task = await taskModel.findById(id)
      res.json(task)
   } catch (err) {
      res.send(err)
   }
}

module.exports = {
   view_all_tasks,
   view_task_by_id
}