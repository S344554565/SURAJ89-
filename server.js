const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

app.use(express.static(publicDir));

app.get("/", (req, res) => {
res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/health", (req, res) => {
res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
console.log("MR SURAJ Panel running on port ${PORT}");
});