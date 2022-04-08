import { html } from "../lib.js";

const homeTemplate = () => html`
<section id="home-page" class="home">
<h1>Welcome to football team generator</h1>
    <h1>This site is under construction...</h1>
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</section>
`
export function homeView(ctx){
    ctx.render(homeTemplate());
}
