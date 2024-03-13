require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
