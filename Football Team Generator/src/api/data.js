import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function getAllTeams(){
    return api.get('/data/teams?sortBy=_createdOn%20desc');
};

async function createTeam(team){
    return api.post('/data/teams', team);
};

async function getTeamById(id){
    return api.get('/data/teams/' + id);
};

async function editTeam(id, data){
    return api.put('/data/teams/' + id, data);
};

async function deleteTeamById(id){
    return api.del('/data/teams/' + id);
};

async function getMyTeams(ownerId){
    return api.get(`/data/teams?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
};

async function addLike(teamId){
    return api.post('/data/likes', {teamId});
};

async function getAllLikes(teamId){
    return api.get(`/data/likes?where=teamId%3D%22${teamId}%22&distinct=_ownerId&count`);
}

async function searchTeamByName(teamName){
    return api.get(`/data/teams?where=name LIKE ${teamName}`)
}

async function getSpecificLike(teamId, userId){
    return api.get(`/data/likes?where=teamId%3D%22${teamId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export {
    login,
    register,
    logout,
    getAllTeams,
    createTeam,
    getTeamById,
    editTeam,
    deleteTeamById,
    getMyTeams,
    addLike,
    getAllLikes,
    searchTeamByName,
    getSpecificLike
}