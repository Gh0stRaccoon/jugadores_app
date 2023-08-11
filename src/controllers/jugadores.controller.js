const express = require("express");
const Jugador = require("../db/models/jugadores");
const router = express.Router();

router.get("/jugadores", async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    res.status(200).json(jugadores);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocurrió un error al devolver los jugadores" });
  }
});

router.get("/jugadores/:id", async (req, res) => {
  const { id } = req.params;
  const jugador = await Jugador.findByPk(id);

  if (!jugador)
    return res.status(404).json({
      error: "El jugador no existe en la base de datos",
    });

  return res.status(200).json(jugador);
});

router.post("/jugadores", async (req, res) => {
  const { nombre, posicion } = req.body;

  try {
    const nuevo_jugador = await Jugador.create({ nombre, posicion });
    return res.status(201).json(nuevo_jugador);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
