import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const jugadores = ['Roberto', 'Javier'];
  const condicion = ['Ganou', 'Perdió'];
  const premios = ['Unacasa', 'lotery'];

  //for (let i = 0; i < jugadores.length; i++) {
  //for (let j = 0; j < condicion.length; j++) {
  //for (let k = 0; k < premios.length; k++) {

  // console.log(jugadores[i] + condicion[j] + premios[k] + ".com")


  //}

  //}



  const resultadoFinal = jugadores.map((jugador, index) => {
    return `${jugador} ${condicion[index]} ${premios[index]}`;
  });
  console.log(resultadoFinal);
}

