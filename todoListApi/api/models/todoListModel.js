//mongoose: a library which is used to connect
//and work with MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//declare TaskSchema (design/structure of table "Task")
const TaskSchema = new Schema({
   //declare all columns (fields) for this table (collection)
   //short hand (short syntax)
   //name: String,
   name: {
      type: String,
      //required   =>  return default error message is value is empty
      required : "Task name can not be empty"   // => return custom error message
   },
   created_date: {
      type: Date,
      default: Date.now     //set default value is today
   } ,
   status: {
      type: [{
         type: String,
         //use enum for custom predefined list => limit options to be selected
         enum: ['pending', 'ongoing', 'completed']    //to-do, doing, done
      }],
      default: ['pending']
   }
})

//declare TaskModel
const TaskModel = mongoose.model('Tasks', TaskSchema)
//export module
module.exports = TaskModel