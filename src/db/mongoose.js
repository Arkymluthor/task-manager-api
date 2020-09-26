const mongoose = require ("mongoose")
const validator = require("validator")

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    //useFindAndModify:false
})


// const User = mongoose.model("User",{
//     name: {
//         type: String,
//         required: true,
//         trim: true


//     },

//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email is invalid")

//             }
//         }

//     },
//     age:{
//         type: Number,
//         default:0,
//         validate(value){
//             if(value <0){
//                 throw new Error("Age must be positive")
//             }

//         }

//     },
//     password:{
//         type: String,
//         minlength: 7,
//         trim: true,
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error("Password can not inlude password")
//             }
//         }


//     }

// })


// const Task = mongoose.model("Task",{
//     Description: {
//         type:String,
//         required: true,
//         trim: true
//     },
//     Completed:{
//         type: Boolean,
//         default: false
//     }

// })

//  const task = new Task({
//     Description: "wash plate   ",

//     })

//  task.save().then(()=>{
//      console.log(task)
//  }).catch((error)=>{
//      console.log("Error",error)

//  })
 




// const me = new User({
//      name: "Alim", 
//      email:"lahan@gmAil.com    ",
//      age: 39,
//      password: "Hakeemhyyubn"
//  })

//  me.save().then(()=>{
//      console.log(me)
//  }).catch(()=>{
//      console.log("Error", error)
//  })


