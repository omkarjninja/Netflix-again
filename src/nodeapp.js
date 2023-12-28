const express=require("express")
const bodyParser=require("body-parser")
path = require('path')
const c=path.join(__dirname, "..","public",'/index.html');

const app=express()
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){

})


app.post("/",function(req,res){
    res.sendFile(c);
    console.log("hello i m active");
    const email=req.body.email;
    console.log(email);

})
app.listen(3000,function(){
    console.log("server has been started");
})