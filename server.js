require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const authRoutes = require("./server/routes/auth.routes");
const testRoutes = require("./server/routes/test.routes");

const bcrypt = require("bcrypt");
async function pass() {
  let x = await bcrypt.hash("password", 10);
  console.log(x);
}
pass();

app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use(cors({origin:true}));

app.use("/api/users", authRoutes);
app.use("/api/testing", testRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is running!"));
