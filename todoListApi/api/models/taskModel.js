//mongoose: a library which is used to connect
//and work with MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//declare TaskSchema (design/structure of table "Task")
const TaskSchema = new Schema(
   {
      //declare all columns (fields) for this table (collection)
      //short hand (short syntax)
      //name: String,
      name: {
         type: String,
         //required   =>  return default error message is value is empty
         required: "Task name can not be empty",   // => return custom error message,
         minLength: 5,
         maxLength: 20
      },
      created_date: {
         type: Date,
         default: Date.now     //set default value is today
      },
      status: {
         type: [{
            type: String,
            //use enum for custom predefined list => limit options to be selected
            enum: ['pending', 'ongoing', 'completed']    //to-do, doing, done
         }],
         default: ['pending']
      }
   },
   {
      versionKey: false       //ignore "__v" when adding new data
   }
)

//declare TaskModel
const TaskModel = mongoose.model('tasks', TaskSchema)   //tasks: collection (table) name
//export module
module.exports = TaskModel