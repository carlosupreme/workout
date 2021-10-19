import { App } from "./components/App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange",e=>{
  App()
})