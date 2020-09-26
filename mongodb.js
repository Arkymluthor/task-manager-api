//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL='mongodb://127.0.0.1:27017' //Mongodocumetation
const databaseName= 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
   const db= client.db(databaseName)
 // Using promises
//    db.collection('users').updateOne({_id : new ObjectID("5f20592bbde9a104453f96e3")
//     },{
//         $set:{
//             name: "Darasimi"
//         }

//     }).then((result)=>{

//         console.log(result)

//     }).catch((error)=>{
//         console.log(error)

//     })

//     db.collection('tasks').updateMany({completed: false},{
//         $set:{
//             completed: true
//         }
//     }).then((result)=>{
//         console.log(result)

//     }).catch((error)=>{
//         console.log(error)
//     })


    db.collection('users').deleteMany({name: "Myra"}).then((result)=>{
         console.log(result)

     }).catch((error)=>{
         console.log(error)
     })














    //    db.collection('users').insertOne({
    //
    //         name: "Ruby",
    //         age: 3

    //    },(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert user')
    //         }
    //             console.log(result.ops)
    //     })

        // db.collection('users').insertMany([

        //     {
        //         name: "Jen",
        //         age: 28
        //     },{
        //         name:"Myra",
        //         age: 26
        //     }],(error,result)=>{
        //         if(error){
        //             return console.log('Unable to insert docs')
        //         }
        //         console.log(result.ops)

                

        //     })

        // db.collection('tasks').insertMany([
        //     {
        //         descp: "Clean room",
        //         completed: true
        //     },{
        //         descp: " Write notes",
        //         completed: false
        //     },{
        //         descp: "Groceries?",
        //         completed: false
        //     }
        // ],(error, result)=>{
        //     if(error){
        //         return console.log('Unable to check task status')
        //     }

        //     console.log(result.ops)


        // })

        // db.collection('users').findOne({_id: new ObjectID("5f205bcf285cd70480468a9b")},(error,user)=>{
        //     if(error){
        //         return console.log("Unable to fetch")
        //     }
        //     console.log(user)

        // })


        // db.collection("users").find({age:3}).toArray((error,users)=>{
        //     console.log(users)
        // })


        // db.collection("users").find({age:3}).count((error,users)=>{
        //     console.log(users)
        // })
            

            // db.collection("tasks").findOne({_id: new ObjectID("5f205d5f27906c0494dbd943")},(error,task)=>{

            //     if(error){
            //         return console.log("cant find task")
            //     }
            //     console.log(task)
            // })


            // db.collection('tasks').find({completed: false}).toArray((error,task)=>{
            //     if(error){
            //         return console.log("Cant find task")
            //     }

            //     console.log(task)

            // })









})
