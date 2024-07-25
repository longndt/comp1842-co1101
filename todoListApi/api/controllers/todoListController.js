// const mongoose = require('mongoose')
// const taskModel = mongoose.model('taskModel')

const taskModel = require('../models/taskModel')

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