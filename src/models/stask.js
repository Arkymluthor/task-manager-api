const mongoose = require ("mongoose")
const validator = require("validator")


const taskSchema = new mongoose.Schema({
  
        Description: {
            type:String,
            required: true,
            trim: true
        },
        Completed:{
            type: Boolean,
            default: false
        },
        owner:{
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref:"User" //allows to link another model named "User"
    
        }
    
},{
    timestamps: true
})

// const Task = mongoose.model("Stask",{
//     Description: {
//         type:String,
//         required: true,
//         trim: true
//     },
//     Completed:{
//         type: Boolean,
//         default: false
//     },
//     owner:{
//         type: mongoose.SchemaTypes.ObjectId,
//         required: true,
//         ref:"User" //allows to link another model named "User"

//     }

// })
const Task = mongoose.model("Stask",taskSchema)

module.exports= Task