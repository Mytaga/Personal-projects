import { searchTeamByName } from "../api/data.js";
import { html } from "../lib.js";

const searchTemplate = (onSearch) => html`
<section id="dashboard-page" class="dashboard">
    <h2>Search by name</h2>
    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired team name">
        <button class="button" @click=${onSearch}>Search</button>
    </div>
</section>
`
const resultsTemplate = (teams) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Results</h1>
    ${teams.length > 0 ? teams.map(teamCardTemplate): html` <p class="no-teams">No matches found!</p>`}
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

export function searchView(ctx){
    ctx.render(searchTemplate(onSearch));

    async function onSearch(event){
        event.preventDefault();
        const name = document.getElementById('search-input').value;

        if(name == '') {
            return alert('Please enter a valid name');
        }

        let query = encodeURIComponent(`"${name}"`);
        const results = await searchTeamByName(query);

        ctx.render(resultsTemplate(results));
    }
}