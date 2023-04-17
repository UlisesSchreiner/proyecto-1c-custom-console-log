module.exports = {
  ok,
  info,
  error,
  aviso,
};

function ok(mensaje) {
    const estilos = "backgrounf-color: blue;"
    mostrarmsj(mensaje, estilos);
}

function info(mensaje) {
    const estilos = "backgrounf-color: green;"
    mostrarmsj(mensaje, estilos);
}

function error(mensaje) {
    const estilos = "backgrounf-color: red;"
    mostrarmsj(mensaje, estilos);
}

function aviso(mensaje) {
const estilos = "backgrounf-color: yellow;"
  mostrarmsj(mensaje, estilos);
}

function mostrarmsj(mensaje, estilos) {
  console.log("%c %s", mensaje, estilos);
}
