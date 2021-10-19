import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Loader } from "./Loader.js";
import { Router } from "./Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Loader());
  
  Router();
  $root.appendChild(Footer())
}
