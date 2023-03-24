
let visible_id = "contenedor_pedidos";

function toggle_visibility(id) {
  document.getElementById(visible_id).style.opacity = "0%";
  document.getElementById(visible_id).style.visibility = "hidden";
  document.getElementById(id).style.visibility = "visible";
  document.getElementById(id).style.opacity = "100%";

  visible_id = id;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}