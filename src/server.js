require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const jobRoutes = require("./routes/jobRoutes");
const teamMemberRoutes = require("./routes/teamMemberRoutes");
const courseRoutes = require("./routes/courseRoutes");
const skillTestRoutes = require("./routes/skillTestRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Recruitment Platform API is running",
  });
});

app.use("/api/jobs", jobRoutes);
app.use("/api/team-members", teamMemberRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/skill-tests", skillTestRoutes);
app.use("/api/candidates", candidateRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
