export function Loader() {
  const $loader = document.createElement("img");
  $loader.classList.add("loader");
  $loader.src = "assets/loader.svg";
  $loader.width = "50";
  $loader.alt = "Cargando...";
  $loader.title = "Cargando...";
  return $loader;
}
