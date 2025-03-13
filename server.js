// server.js

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
const caseTypeRoute = require("blaze-engine/server/route/case-type-route");
const caseRoute = require("blaze-engine/server/route/case-route");
const componentRoute = require("blaze-engine/server/route/component-route");

// Serve static files from the "client/public" directory
app.use(express.static(path.join(__dirname, "client/public")));

// Serve node_modules from the root path
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// Route for the root of your application
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

app.use("/src", express.static(path.join(__dirname, "client/src")));
app.use(express.json());
app.use(caseTypeRoute);
app.use(caseRoute);
app.use(componentRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
