const users = [{
	id: 1,
	name: 'Jose',
	schoolId: 105
}, {
	id: 2,
	name: 'Ramon',
	schoolId: 108
}];
const grades = [{
	id: 1,
	schoolId: 105,
	grade: 85
}, {
	id: 2,
	schoolId: 108,
	grade: 89
}, {
	id: 3,
	schoolId: 105,
	grade: 80
}];

const getUser = (id) =>{
	return new Promises((resolve, reject) =>{
		const user = users.find((user) => user.id === id);

		if (user){
			resolve(user);
		} else{
			reject(`Unable to find user eith id of ${id}.`);
		}
	});
};

const getGrades = (schoolId) =>{
	return new Promises((resolve, reject) =>{
		resolve(grades.filter((grade) => grade.schoolId === schoolId));
	});
};

const getStatus = (userId) =>{
	var user;
	return getUser(userId).then((tempUser) =>{
		user = tempUser;
		return getGrades(user.schoolId);
	}).then((grades) =>{
		let average = 0;

		if (grades.length >0){
			average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
		}
		return `${user.name} has a ${average}% in the class.`;
	});
};

const getStatusAlt = async (userId) =>{
	const user = await getUser(userId);
	const grades = await getGrades(user.schoolId);

	let average = 0;

		if (grades.length >0){
			average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
		}
		return `${user.name} has a ${average}% in the class.`;
};

//getUser(2).then((user)=>{
//	console.log(user);
//}).catch((e) =>{
//	console.log(e);
//});

//getUser(2).then((grades)=>{
//	console.log(grades);
//}).catch((e) =>{
//	console.log(e);
//});

//getStatus(2).then((status)=>{
//	console.log(status);
//}).catch((e) =>{
//	console.log(e);
//});

getStatusAlt(2).then((name) =>{
	console.log(name);
}).catch((e) =>{
	console.log(e);
});