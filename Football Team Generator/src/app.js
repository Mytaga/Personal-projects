import { page, render } from "./lib.js";
import { getUserData } from "./util.js";

const root = document.querySelector('#content');

updateNav();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav();
    next();
};

function updateNav(){
    const user = getUserData();

    if(user){
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user').style.display = 'block';
        document.querySelector('span').textContent = `Welcome, ${user.email}`
    } else {
        document.querySelector('#guest').style.display = 'block';
        document.querySelector('#user').style.display = 'none';
    }  
}