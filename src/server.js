const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const rutasJugadores = require("./controllers/jugadores.controller");
const Jugador = require("./db/models/jugadores");

const app = express();
const port = 5000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use("/api", rutasJugadores);

app.get("/", async (req, res) => {
  try {
    const resJugadores = await Jugador.findAll();
    const jugadores = resJugadores.map((jugador) => jugador.dataValues);
    res.render("Home", { jugadores });
  } catch (error) {
    res.render("Error", { message: error.message });
  }
});

app.listen(port, () => {
  console.log("Me estoy ejecutando en el puerto ", port);
});
