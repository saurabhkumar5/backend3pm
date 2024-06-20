const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json())
// getting-started.js
main().catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/batch3pm')
   await mongoose.connect('mongodb+srv://saurabhmaurya8626:xHOHaT3llc17ixiW@cluster0.dfo8bmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log("database is connected"))
}


 const schema = new mongoose.Schema({
      name:String,
      mob:Number
 })

const Model = mongoose.model('product',schema);
const Users = mongoose.model('user',schema)





app.get('/',(req,res)=>{
 
    res.send("hello from backend")
})



app.post('/data',(req,res)=>{
         
        console.log(req.body)
    // const data = new Model({name:"jaspreet",mob:123456})
    const data = new Model(req.body)
    data.save();
    
    res.send("hello from backend")
})

app.post('/user',(req,res)=>{

    const data = new Users({name:"aman",mob:789})
    data.save();
    
    res.send("hello from backend")
})


// saurabhmaurya8626
// xHOHaT3llc17ixiW



app.listen(4000,()=>console.log("server is started"))




// object vs json vs bson
