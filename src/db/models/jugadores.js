const { DataTypes } = require("sequelize");
const cliente = require("../../config/db.config");

const Jugador = cliente.define("Jugador", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posicion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const sync = async () => {
  try {
    await Jugador.sync();
    console.log("Sincronizado con éxito");
  } catch (error) {
    console.log("Error al sincronizar", error);
  }
};

sync();

module.exports = Jugador;
