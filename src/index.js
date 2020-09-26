const express = require("express")
require("./db/mongoose")

//const User= require("./models/user")
//const Task = require("./models/stask")
const userRouter=require("./routers/user")
const taskRouter=require("./routers/task")
const app = express()
const port = process.env.PORT// || 3000

// app.use((req,res,next)=>{
//   if(req.method == "GET"){
//     res.send("GET requests disabled")

//   }else{
//     next()
//   }
//   //console.log(req.method, req.path)
// })
// const multer = require("multer")
// const upload=multer({
//   dest:"images",
//   limits:{
//     fileSize: 1000000 //bytes
//   },
//   fileFilter(req,file,cb){

//     if(!file.originalname.match(/\.(doc|docx)$/)){
//       return cb(new Error("File must be a word document"))
//     }
//     // if(!file.originalname.endsWith(".pdf")){
//     //   return cb(new Error("File must be a PDF"))
//     // }
//     cb(undefined,true)

//   //   cb(new Error("File must be a PDF"))
//   //   cb(undefined,true)

//  }
// })

// // app.post("/upload", upload.single("upload"), (req,res)=>{
// //   res.send()

// // })
// // const errorMiddleware = (req,res, next)=>{
// //   throw new Error("From my middleware")

// // }
// app.post("/upload",upload.single("upload"), (req,res)=>{
//   res.send()

// }, (error,req,res,next)=>{
//   res.status(400).send({error:error.message})

// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
  console.log("Server is up on port " + port)


})

// const Task = require("./models/stask")

// const main = async () =>{
//   const task = await
// }



// app.use((req,res,next)=>{
//   res.status(503).send("Site under maintenance")


// })



// const router = new express.Router()

// router.get("/test",(req,res)=>{
//     res.send("This is a new router")
// })
// app.use(router)



// const bycrypt = require("bcryptjs")
// const myFunction = async()=>{

//     const password = "Red1234"
//     const hashedPassword = await bycrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bycrypt.compare("Red1244",hashedPassword)

//     console.log(isMatch)

// }

// myFunction()

 //const jwt = require("jsonwebtoken")
// const myFunction = async()=>{
//    const token = jwt.sign({_id: "abc123"},"Thisismynew",{expiresIn: "10 seconds"})
//    console.log(token)

//   const data= jwt.verify(token,"Thisismynew")
//   console.log(data)

// }

// myFunction()
//const Task = require("./models/stask")
// const User= require("./models/user")


// const main = async () =>{
//   const user = await User.findById("5f6aa43ebea024af313e1dc8")
//   await user.populate("tasks").execPopulate()
//   console.log(user.tasks)
// }

// main()



