import { searchTeamByName } from "../api/data.js";
import { html } from "../lib.js"; 

const searchResponseTemplate = (teams, onSubmit) => html`
<section id="search-teams">
    <h2>Filter by name</h2>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired team name">
        <button class="button-list" @click=${onSubmit}>Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${teams.length == 0 ? html`<p class="no-cars"> No results.</p>` : teams.map(teamCardTemplate)}
    </div>
</section>
`

const teamCardTemplate = (team) => html`
<ul class="other-teams-list">
    <li class="otherTeams">
        <h3>${team.name}</h3>
        <p>Nationality: ${team.nationality}</p>
        <p class="img"><img src=${team.imageUrl}></p>
        <a class="button" href="/details/${team._id}">Details</a>
    </li>
</ul>`

export async function searchResponseView(ctx){
    const desiredTeams = await searchTeamByName(ctx.params.name);
    ctx.render(searchResponseTemplate(desiredTeams, onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        
        const name = document.getElementById('search-input').value;
        if(name == '') {
            return alert('Please enter a valid name');
        }
        console.log(ctx.params.name)
        ctx.page.redirect('/search/'+ name);
    }
    
}