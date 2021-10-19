export function Home() {
  const $home = document.createElement("div");
  $home.classList = "container";
  $home.innerHTML = `
  <h2 class="h1 mb-5 text-center">Welcome to <mark>Workout</mark></h2>
  <h2 class=" text-white text-center bg-dark w-100 p-2 mb-4 border  border-dark rounded">Tipo de entrenamiento</h2>
  <div class=" d-grid gap-3">
  
  <a href="#/full-body" class="container btn btn-outline-primary">Full body</a>
  <a href="#/torso-pierna" class="container btn btn-outline-success">Torso-pierna</a>
  <a href="#/push-pull-leg" class="container btn btn-outline-danger">Push-pull-leg</a>
  
  </div>
  `;

  return $home;
}
