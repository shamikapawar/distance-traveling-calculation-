const express = require("express");
const tripRoutes = require("./routes/tripRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", authMiddleware.registerUser);
app.post("/login", authMiddleware.loginUser);

app.use("/api/trips", tripRoutes);

const PORT = 4448;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
