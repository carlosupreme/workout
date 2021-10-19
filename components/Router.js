import { Day } from "./Day.js";
import { Home } from "./Home.js";

export function Router() {
  let { hash } = location;
  const $root = document.getElementById("root");
  
  if (!hash || hash === "#" || hash === "#/") {
    $root.appendChild(Home());
  }

  document.querySelector(".loader").style.display = "none";
  

  // navigation dates

  // document
  //   .querySelectorAll(".nav-link")
  //   .forEach((el) => el.classList.remove("is-active"));
  // document
  //   .querySelector(`a[href="${localStorage.getItem("view")}"]`)
  //   .classList.add("is-active");
}
