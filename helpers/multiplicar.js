const fs = require("fs");

require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    const nombreArchivo = `tabla-${base}.txt`;
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${"x".red} ${i} ${"=".blue} ${base * i}\n`;
      consola += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) console.log(salida);

    fs.writeFile(`./salida/${nombreArchivo}`, consola, (err) => {
      if (err) throw error;
    });
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
