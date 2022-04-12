import { getMyTeams } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const myTeamsTemplate = (teams) => html`
<section id="my-teams-page" class="my-teams">
    <h1>My Teams</h1>
    ${teams.length > 0 ? teams.map(myTeamCardTemplate): html` <p class="no-teams">No teams in database!</p>`}
</section>`

const myTeamCardTemplate = (team) => html`
<ul class="my-teams-list">
    <li class="otherTeams">
        <h3>${team.name}</h3>
        <p>Nationality: ${team.nationality}</p>
        <p class="img"><img src=${team.imageUrl}></p>
        <a class="button" href="/details/${team._id}">Details</a>
    </li>
</ul>
`

export async function myTeamsView(ctx){
    const user = getUserData();
    const myTeams = await getMyTeams(user.id);
    ctx.render(myTeamsTemplate(myTeams));
}