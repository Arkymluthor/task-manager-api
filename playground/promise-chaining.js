require("../src/db/mongoose")

const User = require("../src/models/user")

//"5f24ca9fbcec1d44281e38c6"

User.findByIdAndUpdate("5f24ca9fbcec1d44281e38c6",{age: 40}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 40})

}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})




const updateAgeCount= async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count= await User.countDocuments({age})
    return count

}

updateAgeCount("5f24ca9fbcec1d44281e38c6",6).then((count)=>{
    console.log(count)


}).catch((e)=>{
    console.log(e)

})