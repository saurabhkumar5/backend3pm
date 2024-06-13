const express = require('express');

const controller  =  require('./controller/user')
const app = express();


app.use(express.json())

// mvc  
app
.get('/',controller.home)
.get('/search', controller.search)
.get('/admin',controller.admin )
.get('/about',controller.about)
.get('/momo',controller.momo)
.post('/service',controller.service)




app.get('*',(req,res)=>{
        
    res.send("bhai ye page exist nahi karta h")
})

app.listen(5000,()=>console.log("server is strted"))


































//middleware



//  const middleware = (req,res,next)=>{
            
//     //    console.log("hello from middleware")
//     console.log('Request Type:', req.method)
//     console.log('Request Type:', req.url)
//     //    res.send("hello from middleware")
//     next()
//  }
//  app.use(middleware)




//   app.use((req,res,next)=>{
//     console.log('Request Type:', req.method)
//     console.log('Request Type:', req.url)
//     // console.log('Time:', Date.now())

  
//     next()
//     })



//     app.use((req,res,next)=>{
//         console.log("hello");

//         next()
//     })



// admin middleware

    //   const admin = ((req,res,next)=>{

    //       if(req.path==='/admin' && req.method==='GET'){
    //         console.log("access by admin")
    //         // res.send("access by admin")
    //       }
    //       else{
    //         res.send("only admin can access")
    //       }
    //       next()
    // })





// let data = [
//     {id:1,name:"sohan"},
//     {id:2,name:"mohan"},
//     {id:3,name:"rohan"},
//    ]
// app.get('/api/users/:id',(req,res)=>{
//         console.log(req.params)
//                const value   = parseInt(req.params.id)
//                if(isNaN(value))
//                    return res.send({msg:"bad request"})
               
//               const z  = data.find((user)=>user.id===value);
//                     if(!z) return res.send("not found");

//                     return res.send(z)
// })


// app.get('/api/users',(req,res)=>{
//     console.log(req.query)
//     res.send(data)
             
// })
//  let value = []

// app.post('/api/users',(req,res)=>{
//     //   console.log(req.body)
//       const a = req.body;
//       value.push(a)
//       console.log(value)
//     res.send("your photo is uploaded successfully")
// })

// app.delete('/api/users/:id',(req,res)=>{
//     console.log(req.params)

//     res.status(200).send("your photo is deleted")
// })

// route params
// app.get('/instagram/:id',(req,res)=>{
//     console.log(req.params.id)

//     res.send(`instagram account of ${req.params.id}`)
   
// })







