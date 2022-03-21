require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./server/routes/users.routes");
const testRoutes = require("./server/routes/test.routes");
const eventsRoutes = require("./server/routes/events.routes")

const bcrypt = require("bcrypt");
async function pass() {
  let x = await bcrypt.hash("password", 10);
}
pass();

app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use(cors({origin:true}));

app.use("/api/events", eventsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/testing", testRoutes);

app.get("*", (req, res) => {
  return res.send("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is running!"));
