const express = require("express");
const cors =require("cors");
const { UsersRouter } = require("./Routes/User.Routes");
const { PostRouter } = require("./Routes/Post.Routes");
const { AnalyticsRouter } = require("./Routes/Analytics.Routes");
const { Connection } = require("./config/db");

const app = express();
app.use(cors())
app.use(express.json());

// ===== Routes =======
app.get("/",(req,res)=>{
  res.send("This Is Adobe Social Media App Backend")
})
app.use("/users",UsersRouter)
app.use("/posts",PostRouter)
app.use("/analytics",AnalyticsRouter)

// =======Connection======
app.listen(8500, async () => {
  try {
    await Connection
    console.log("http://localhost:8500")
  }
   catch (error) {
    console.log("Error in Connections",error);
    
  }
});
