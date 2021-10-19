export function Header() {
  const $header = document.createElement("header");
  $header.classList = "shadow-sm p-2 mb-4 rounded bg-dark text-white"
  $header.innerHTML = `<h1 class="text-center">workout</h1>`;

  return $header
}
