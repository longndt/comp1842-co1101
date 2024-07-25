// const mongoose = require('mongoose')
// const taskModel = mongoose.model('taskModel')

const TaskModel = require('../models/taskModel')
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

const delete_all_tasks = async (req, res) => {
   try {
      await TaskModel.deleteMany()
      res.json({"message" : "Delete all tasks succeed !"})
   } catch (err) {
      res.send(err)
   }
}

const delete_task_by_id = async (req, res) => {
   try {
      id = req.params.taskId
      await TaskModel.findByIdAndDelete(id)
      res.json({ "message": "Delete 1 task succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const create_new_task = async (req, res) => {
   try {
      new_task = req.body
      await taskModel.create(new_task)
      res.json({ "message": "Create new task succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const update_task = async (req, res) => {
   try {
      id = req.params.taskId
      updated_task = req.body
      await taskModel.findByIdAndUpdate(id, updated_task)
      res.json({ "message": "Update task succeed !" })

   } catch (err) {
      res.send(err)
   }
}

module.exports = {
   view_all_tasks,
   view_task_by_id,
   delete_all_tasks,
   delete_task_by_id,
   create_new_task,
   update_task
}