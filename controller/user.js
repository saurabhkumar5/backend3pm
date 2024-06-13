  exports.home  = (req,res)=>{
            
    res.send("hello from backend side")
}

 exports.search = (req,res)=>{
res.send("hello from search side")
}

exports.admin = (req,res)=>{
res.send("Admin page")
}

exports.about = (req,res)=>{

  res.send("hello from home side")
}

exports.service  = (req,res)=>{
      
res.send("hello from service pages")
}

exports.momo = (req,res)=>{
    res.send("hello from momo side")
}


