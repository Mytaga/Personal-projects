import { html } from "../lib.js";

const homeTemplate = () => html`
<section id="home-page" class="home">

<div class='resize_fit_center'>
<h1>Welcome to football team generator</h1>
<h1>Create your favourite team and gain likes</h1>
</div>
</section>
`
export function homeView(ctx){
    ctx.render(homeTemplate());
}
