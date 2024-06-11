
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);


// const os = require('node:os'); 
// console.log(os.arch());
// console.log(os.cpus())
// console.log(os.freemem())

// console.log(os.homedir())
// console.log(os.hostname())

// console.log(os.loadavg())
//    console.log(os.machine())

// console.log(os.networkInterfaces())

// console.log(os.platform())


// console.log(os.release())

// console.log(os.type())

// console.log(os.uptime())
// console.log(os.userInfo([options]))
// console.log(os.version())



    const http = require('http');

             const app   =  http.createServer((req,res)=>{
                       
                       res.end("<p>Hello from kya haal chal</p>")
                  })


                  app.listen(4000,()=>{
                    console.log("server is running")
                  })

