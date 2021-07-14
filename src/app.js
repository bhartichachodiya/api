const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const app = express();

app.use(express.json());

//we will handle post request
app.post("/mens", async (req, res) => {
  try{
   const addingMensRecords = new MensRanking(req.body);
   console.log(req.body);
   const  insertMens =  await addingMensRecords.save();
   res.status(201).send(insrtMens);
   
}catch(e){
    res.status(400).send(e);
}

})  
//we will handle get request
app.get("/mens", async (req, res) => {
    try{
     const getMens =  await getMensRanking.find({});
     res.send(getMens);
     }catch(e){
      res.send(e);
    }
  
})
  




app.listen(9000, ()=>{
    console.log("connection is setup at 9000");
})