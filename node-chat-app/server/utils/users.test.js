const expect = require('expect');

const {Users} = require('./users');

describe('Users', () =>{
	var users;
	beforeEach(() =>{
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Jose',
			room: 'Manga room'
		}, {
			id: '2',
			name: 'Ramon',
			room: 'Manga room 2'
		}, {
			id: '3',
			name: 'Jesus',
			room: 'Node course'
		}];
	});

	it('Should add new user', () =>{
		var users = new Users();
		var user = {
			id: '456',
			name: 'Jose',
			room: 'Manga room'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('Should remove a user', () =>{
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('Should not remove user', () =>{
		var userId = '88';
		var user = users.removeUser(userId);

		expect(user.id).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('Should find user', () =>{
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('Should not find user', () =>{
		var userId = '99';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('Should return names for node course' () =>{
		var userList = users.getUserList('Node course');

		expect(userList).toEqual(['Jesus']);
	});

	it('Should return names for Manga room' () =>{
		var userList = users.getUserList('Manga room');

		expect(userList).toEqual(['Jose']);
});