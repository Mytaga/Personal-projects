import { createTeam } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`
<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <p class="field">
                <label for="title">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" placeholder="name">
                </span>
            </p>
            <p class="field">
                <label for="title">Nationality</label>
                <span class="input">
                    <input type="text" name="nationality" id="nationality" placeholder="nationality">
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="image">
                </span>
            </p>
            <p class="field">
                <label for="image">Titles</label>
                <span class="input">
                    <input type="text" name="titles" id="titles" placeholder="titles">
                </span>
            </p>
            <p class="field">
                <label for="image">Domestic Cups</label>
                <span class="input">
                    <input type="text" name="cups" id="cups" placeholder="cups">
                </span>
            </p>
            <p class="field">
                <label for="image">Stadium</label>
                <span class="input">
                    <input type="text" name="stadium" id="stadium" placeholder="stadium">
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Team">
        </fieldset>
    </form>
</section>`

export function createView(ctx){
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const titles = formData.get('titles');
        const cups = formData.get('cups');
        const imageUrl = formData.get('imageUrl');
        const nationality = formData.get('nationality');
        const stadium = formData.get('stadium');

        if (name == '' || titles == '' || cups == '' || imageUrl == '' || nationality == '' || stadium == ''){
            return alert('Please fill all fields');
        }

        const data = {
            name,
            titles,
            cups,
            imageUrl,
            nationality,
            stadium
        }

        await createTeam(data);
        ctx.page.redirect('/catalog');
    };

};