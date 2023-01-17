const userContainer = document.getElementById('userContainer');

const mockUser = {
	gender: 'female',
	name: {
		title: 'Miss',
		first: 'Jennie',
		last: 'Nichols',
	},
	location: {
		street: {
			number: 8929,
			name: 'Valwood Pkwy',
		},
		city: 'Billings',
		state: 'Michigan',
		country: 'United States',
		postcode: '63104',
		coordinates: {
			latitude: '-69.8246',
			longitude: '134.8719',
		},
		timezone: {
			offset: '+9:30',
			description: 'Adelaide, Darwin',
		},
	},
	email: 'jennie.nichols@example.com',
	login: {
		uuid: '7a0eed16-9430-4d68-901f-c0d4c1c3bf00',
		username: 'yellowpeacock117',
		password: 'addison',
		salt: 'sld1yGtd',
		md5: 'ab54ac4c0be9480ae8fa5e9e2a5196a3',
		sha1: 'edcf2ce613cbdea349133c52dc2f3b83168dc51b',
		sha256: '48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d',
	},
	dob: {
		date: '1992-03-08T15:13:16.688Z',
		age: 30,
	},
	registered: {
		date: '2007-07-09T05:51:59.390Z',
		age: 14,
	},
	phone: '(272) 790-0888',
	cell: '(489) 330-2385',
	id: {
		name: 'SSN',
		value: '405-88-3636',
	},
	picture: {
		large: 'https://randomuser.me/api/portraits/men/75.jpg',
		medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
		thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
	},
	nat: 'US',
};

function loadUsers() {
	// TODO: fetch users
	const users = [];

	// remove cards existentes
	userContainer.innerHTML = '';
	// percorre cada usuário e cria card especifico
	users.forEach((user) => createUserCard(user));
}

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
