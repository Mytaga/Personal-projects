import { editTeam, getTeamById } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (team, onSubmit) => html`
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${onSubmit}>
        <fieldset>
            <p class="field">
                <label for="name">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" value=${team.name}>
                </span>
            </p>
            <p class="field">
                <label for="nationality">Nationality</label>
                <span class="input">
                    <input type="text" name="nationality" id="nationality" value=${team.nationality}>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${team.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="titles">Titles</label>
                <span class="input">
                    <input type="text" name="titles" id="titles" value=${team.titles}>
                </span>
            </p>
            <p class="field">
                <label for="stadium">Stadium</label>
                <span class="input">
                    <input type="text" name="stadium" id="stadium" value=${team.stadium}>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`


export async function editView(ctx) {
    const id = ctx.params.id;
    const team = await getTeamById(id)
    ctx.render(editTemplate(team, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const titles = formData.get('titles');
        const imageUrl = formData.get('imageUrl');
        const nationality = formData.get('nationality');
        const stadium = formData.get('stadium');

        if (name == '' || titles == '' || imageUrl == '' || nationality == '' || stadium == ''){
            return alert('Please fill all fields');
        }

        const data = {
            name,
            titles,
            imageUrl,
            nationality,
            stadium
        }

        await editTeam(id, data)
        ctx.page.redirect(`/details/${id}`);
    }
}