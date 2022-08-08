const express = require("express");
const dotenv = require("dotenv");
const app = express();
const getUsers = require("./router/api/users");
const bodyParser = require("body-parser");

/* const eg = require("./services/services"); */

dotenv.config();

const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/v1/users", getUsers);

app.listen(PORT, () => {
  console.log(`Escutando na porta na porta ${PORT}`);
});
