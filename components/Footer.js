export function Footer() {
  const $footer = document.createElement("footer");
  
  $footer.classList = "w-100 bg-secondary text-white d-flex justify-content-center align-items-center";

  $footer.innerHTML = `<small>Developed by carlosuprem</small>`;
  return $footer;
}
