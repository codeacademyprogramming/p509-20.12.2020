try {
	let LOTR = ["Bilbo", "Gandalf", "Nazgul"];

	["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
		console.log(`${item} --> is at index ${index} in this array: ${array}`);
	});

	console.log(LOTR.includes("Bilbo"));

	let users = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Pete" },
		{ id: 3, name: "Mary" },
		{ id: 4, name: "Test" },
		{ id: 5, name: "Raul" },
		{ id: 6, name: "Raul" },
	];

	// returns array of the first two users
	let someUsers = users.filter((user) => user.name != "Raul");

	console.log(someUsers); // 2

	let LOTR = ["Bilbo", "Gandalf", "Nazgul"];
	let arr = LOTR.map((item) => item.length);
	// let arr = [5, 7, 6];

	console.log(arr);

	for (let i = 0; i < LOTR.length; i++) {
		console.log(LOTR[i].length);
	}

	[1, -2, 15, 2, 0, 8].sort(function (a, b) {
		console.log(a + " <> " + b);
		return a - b;
	});

	let arr = [1, 2, 3, 4, 5];

	function summer(arr) {
		let sum = 0;
		sum = arr.reduce((sum, current) => sum + current, 0);
		return sum;
	}

	const summer = (arr) => arr.reduce((sum, current) => sum + current, 0);

	console.log(summer(arr));

	const date1 = new Date("7/13/2010");
	const date2 = new Date("12/15/2010");

	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	diffTime.size.test;
	console.log(diffTime + " milliseconds");
	console.log(diffDays + " days");
} catch {
	console.log(error);
	// error handling
}
