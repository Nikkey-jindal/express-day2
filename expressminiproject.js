const express=require("express");
const app=express();
app.use((req,res,next)=>{
  console.log("first dummy middleware",req.path,req.method);
  next();
})
app.use((req,res,next)=>{
  console.log("second dummy middleware",req.path,req.method);
  next();
});
// app.use((req,res,next)=>{
//   res.send("<h1>the response is returned...</h1>");
// })
app.get("/",(req,res,next)=>{
  console.log("handling / for get",req.url,req.method);
  res.send("<h1>welcome nikkey jindal</h1>");
})
app.get("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for get",req.url,req.method);
 res.send(`<h1>please enter your details in the form</h1>
  <form method="post" action="/submit">
  <label>Enter your name</label>
  <input type="name" name="name">
  <label>Enter password</label>
  <input type="password" name="password">
  </form>`)
})
app.post("/submit",(req,res)=>{
  res.send(`<h1>Form submitted successfully...</h1>`)
})

app.listen(2020,()=>{
  console.log("Server has started");
})