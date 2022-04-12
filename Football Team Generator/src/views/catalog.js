import { getAllTeams } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (teams) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Catalog</h1>
    ${teams.length > 0 ? teams.map(teamCardTemplate): html` <p class="no-teams">No teams in database!</p>`}
</section>`

const teamCardTemplate = (team) => html`
<ul class="other-teams-list">
    <li class="otherTeams">
        <h3>${team.name}</h3>
        <p>Nationality: ${team.nationality}</p>
        <p class="img"><img src=${team.imageUrl}></p>
        <a class="button" href="/details/${team._id}">Details</a>
    </li>
</ul>`

export async function catalogView(ctx){
    const teams = await getAllTeams();
    ctx.render(catalogTemplate(teams));
}