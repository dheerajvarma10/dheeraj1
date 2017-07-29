const mongoose =require('mongoose');
const schema  = mongoose.Schema;

const Todoschema =new schema({
    title: {
      type:String,
      required: true
    },
       is_complete: {
        
         type: Boolean,
          default: false
       }
});

module.exports = mongoose.model('Todo',Todoschema);
