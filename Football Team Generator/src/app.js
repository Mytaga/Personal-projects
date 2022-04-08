import { logout } from "./api/api.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

const root = document.querySelector('#content');

updateNav();
page.redirect('/');

page(decorateContext);
page('/', homeView);
page('/logout', onLogout);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page.start();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
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
};

async function onLogout(){
    await logout();
    updateNav();
    page.redirect('/');
}