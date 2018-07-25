//cuando se tiene solo un argumento se puede pasar sin parentesis
var square = (x) => x * x
console.log(square(9));

//Al usar una variable dentro de la funcion no la tomara pues la variable no esta dentro de la funcion
var user = {
	name: 'Jose',
	sayHi: () => {
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

//user.sayHi();
user.sayHiAlt(1, 2, 3);