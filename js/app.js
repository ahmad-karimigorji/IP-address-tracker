import setMap from "./Map.js";
import PageView from "./PageView.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // to reload content of div where render map
  document.getElementById("weathermap").innerHTML =
    "<div id='map' style='width: 100%; height: 100%;'></div>";

  PageView;
  setMap();
});
