require("../src/db/mongoose")

const Task = require("../src/models/stask")


//"5f24e06eb87250478532b7d2"

Task.findByIdAndDelete("5f24e06eb87250478532b7d2").then((task)=>{
    console.log(task)
    return Task.countDocuments({Completed: false})
}).then((result)=>{
    console.log(result)

}).catch((e)=>{
    console.log(e)
})

const deleteTaskAndCount= async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count= await Task.countDocuments({Completed: false})
    return count

}

deleteTaskAndCount("5f24cd9da8c4194453d9af18").then((count)=>{
    console.log(count)

}).catch((e)=>{
    console.log(e)

})


