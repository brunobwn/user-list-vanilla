'use strict';
/* eslint-disable no-unused-vars */
const userContainer = document.getElementById('userContainer');
const app = axios.create({
    baseURL: 'https://randomuser.me/api',
});
async function loadUsers() {
    // TODO: fetch users
    let users = [];
    try {
        const response = await app.get('/?nat=br&results=30');
        users = response.data.results;
        // remove cards existentes
        userContainer.innerHTML = '';
        // percorre cada usuário e cria card especifico
        users.forEach((user) => createUserCard(user));
    } catch (error) {
        alert(`status:${error.response.status} message: ${error.response.data}`);
        console.error(error);
    }
}
// cria Card de Usuario e adiciona a div#userContainer
function createUserCard(userData) {
    const card = document.createElement('article');
    card.classList.add(
        'flex',
        'items-center',
        'gap-2',
        'p-4',
        'transition-shadow',
        'duration-300',
        'ease-in-out',
        'bg-white',
        'rounded-lg',
        'shadow-lg',
        'hover:shadow-xl',
        'md:gap-3',
        'relative',
        'overflow-hidden'
    );
    card.innerHTML = `
    
    <div class="w-16 h-16 overflow-hidden border-2 rounded-full shadow-lg" style="border-color: ${getRandomColor()}">
    <img src="${userData.picture.large}" alt="user picture" />
</div>
<div class="flex flex-col justify-center w-2/3 break-words">
    <p class="font-semibold">${userData.name.first} ${userData.name.last}</p>
    <p class="text-sm italic opacity-80">${userData.dob.age} anos</p>
    <p class="text-sm">
        <span class="text-xs opacity-70">User: </span>
        ${userData.login.username}
    </p>
    <p class="text-sm">jennie.nichols@example.com</p>
</div>`;
    userContainer.appendChild(card);
}
// retorna cor aleatória
function getRandomColor() {
    const colors = [
        '#B91C1C',
        '#C2410C',
        '#B45309',
        '#A16207',
        '#4D7C0F',
        '#15803D',
        '#047857',
        '#0F766E',
        '#0E7490',
        '#0369A1',
        '#1D4ED8',
        '#4338CA',
        '#6D28D9',
        '#7E22CE',
        '#A21CAF',
        '#BE185D',
        '#BE123C',
        '#44403C',
        '#404040',
        '#3F3F46',
        '#3F3F46',
        '#374151',
        '#334155',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
