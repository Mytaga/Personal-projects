import { html } from "../lib.js";

const searchTemplate = (onSearch) => html`
<section id="search-teams">
    <h2>Filter by name</h2>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired team name">
        <button class="button-list" @click=${onSearch}>Search</button>
    </div>
</section>
`

export function searchView(ctx){
    ctx.render(searchTemplate(onSearch));

    async function onSearch(event){
        event.preventDefault();
        const name = document.getElementById('search-input').value;

        if(name == '') {
            return alert('Please enter a valid name');
        }

        ctx.page.redirect('/search/' + encodeURIComponent(name));
    }
}