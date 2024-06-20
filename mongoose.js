require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json())
// getting-started.js
main().catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/batch3pm')
   await mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("database is connected"))
}


 const schema = new mongoose.Schema({
      name:String,
      mob:Number,
      address:String,
      hobbey:String,
 })

const Model = mongoose.model('product',schema);
const Users = mongoose.model('user',schema)





app.get('/',(req,res)=>{
 
    res.send("hello from backend")
})

app.get('/data',(req,res)=>{


    // Model.find()
    // Model.findById('66740039e3234dd6780c3e47')
    Model.findByIdAndDelete('66740039e3234dd6780c3e47')
    // .then((value)=>console.log(value))
    .then((value)=>{

        return res.send(value)
    })
    
    
    // res.send("hello from data")
})





app.post('/data',(req,res)=>{
         
        console.log(req.body)
    // const data = new Model({name:"jaspreet",mob:123456})
    const data = new Model(req.body)
    data.save();
    
    res.send("hello from backend")
})

app.post('/user',(req,res)=>{

    // const data = new Users({name:"aman",mob:789})
    // data.save();
    
    res.send("hello from backend")
})



app.delete('/delete',(req,res)=>{
      
       Model.findByIdAndDelete('6672b89c40c64569e97b13dd')
       .then(()=>res.send("delete successfully"))
})


// saurabhmaurya8626
// xHOHaT3llc17ixiW



app.listen(4000,()=>console.log("server is started"))




// object vs json vs bson
