//import controller
const todoController = require('../controllers/todoListController')

const router = (app) => {
   //set routes
   //1st type: without taskId
   app.route('/tasks')
      .get(todoController.view_all_tasks)
      //.post(todoController.create_new_task)

   //2nd type: with taskId
   app.route('/tasks/:taskId')
      .get(todoController.view_task_by_id)
     // .put(todoController.update_task)
      //.delete(todoController.delete_task)
}
//export module
module.exports = router


