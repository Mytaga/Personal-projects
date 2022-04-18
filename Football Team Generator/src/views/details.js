import { addLike, deleteTeamById, getAllLikes, getSpecificLike, getTeamById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (team, onDelete, user, isOwner, onLike, totalLikes, isLiked) => html`
<section id="details-page" class="details">
    <div class="team-information">
        <h3>${team.name}</h3>
        <p class="type">Nationality: ${team.nationality}</p>
        <p class="type">Titles: ${team.titles}</p>
        <p class="type">Stadium: ${team.stadium}</p>
        <p class="img"><img src=${team.imageUrl}></p>
        <div class="actions">
            ${isOwner ? html`<a class="button" href="/edit/${team._id}">Edit</a>
            <a class="button" @click=${onDelete} href="javascript:void(0)">Delete</a>` : null}
            
            ${user && !isOwner && isLiked == 0 ? html`<a class="button" @click=${onLike} href="javascript:void(0)">Like</a>` : null}
            
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>
           
        </div>
    </div>
</section>`

export async function detailsView(ctx){
    const id = ctx.params.id
    const team = await getTeamById(id);
    const user = await getUserData();
    const isOwner = user && user.id == team._ownerId;
    const totalLikes = await getAllLikes(id);
    
    let isLiked = false;

    if (user){
        isLiked = await getSpecificLike(id, user.id);
    };
   
    ctx.render(detailsTemplate(team, onDelete, user, isOwner, onLike, totalLikes, isLiked));

    async function onDelete(event){
        event.preventDefault();
        const conf = confirm('Are you sure you want to delete this event ?');

        if (conf){
            await deleteTeamById(id);
            ctx.page.redirect('/catalog');
        }
    };

    async function onLike(event){
        event.preventDefault();
        await addLike(id);
        updateLikesSpan();
        event.target.style.display = 'none';
    }

    async function updateLikesSpan() {
        const newLikes = await getAllLikes(id);
        document.querySelector('#total-likes').textContent = `Likes: ${newLikes}`;
    }
}
