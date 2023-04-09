const express = require("express");
const cors =require("cors");
const { Connection } = require("./config/db");


const app = express();


app.use(cors())
app.use(express.json());




app.listen(8500, async () => {
  try {
    await Connection
    console.log("http://localhost:8500")
  }
   catch (error) {
    console.log("Error in Connections",error);
    
  }
});
