const {rollDice, rollDiceWithDisadvantage, rollDiceWithAdvantage} = require('../src/diceRolling');

// beforeEach(() => {
// 	console.log("message runs before each individual test()");
// });

// afterEach(() => {
// 	console.log("message runs AFTER each individual test()");

// });



describe("Casual tabletop gamer...", () => {

	// xtest is the same as test.skip
	// xtest("...wants to roll a D6 and see a valid result.", () => {

	// });
	
	test("...wants to roll a D6 and see a valid result.", () => {

		let diceResult = rollDice();

		expect(diceResult).toBeGreaterThan(0);
		expect(diceResult).toBeLessThanOrEqual(6);
	});

});

describe("Tabletop RPG gamer...", () => {
	test("...wants to roll a D20 with advantage and see both roll results as well as the best roll.", () => {

		let rollResult = rollDiceWithAdvantage(20);
		// console.log("rollResult = \n" + rollResult.finalResult + ", " + rollResult.rolls);
		console.log("Roll result: \n" + JSON.stringify(rollResult, null, 4));
		console.log(rollResult);

		expect(rollResult.finalResult).toBeGreaterThan(0);
		expect(rollResult.finalResult).toBeLessThanOrEqual(20);

		expect(rollResult.rolls).toHaveLength(2);
		expect(rollResult.rolls).toContain(rollResult.finalResult);
	});


	// let rollDiceWithDisadvantage = jest.fn().mockReturnValue({
	// 	finalResult: 1,
	// 	rolls: [
	// 		1, 20
	// 	]
	// });

	test("...wants to roll a D20 with disadvantage and see both roll results as well as the worst roll.", () => {

		let rollResult = rollDiceWithDisadvantage(20);
		// console.log("rollResult = \n" + rollResult.finalResult + ", " + rollResult.rolls);
		console.log("Roll result: \n" + JSON.stringify(rollResult, null, 4));
		console.log(rollResult);

		expect(rollResult.finalResult).toBeGreaterThan(0);
		expect(rollResult.finalResult).toBeLessThanOrEqual(20);

		expect(rollResult.rolls).toHaveLength(2);
		expect(rollResult.rolls).toContain(rollResult.finalResult);

	});

	test("...wants to roll a D20 one hundred times and see how many natural 20s they get.", () => {
		let diceResults = [];
		for (let index = 0; index < 100; index++) {
			diceResults.push(rollDice(20));
		}

		console.log(diceResults);

		expect(diceResults).toContain(20);
		// expect(diceResults.length).toEqual(100); // this line is the same as below:
		expect(diceResults).toHaveLength(100);
	});

	// In D&D, we have these dice:
	// D4, D6, D8, D10, D12, D20, D100

	describe("...wants to roll a variety of dice. Specifically, they want to roll a...", () => {

		let diceVarieties = [
			{
				diceSize: 4, 
				diceName: "D4"
			},
			{
				diceSize: 6, 
				diceName: "D6"
			},
			{
				diceSize: 8, 
				diceName: "D8"
			},
			{
				diceSize: 10, 
				diceName: "D10"
			},
			{
				diceSize: 12, 
				diceName: "D12"
			},
			{
				diceSize: 20, 
				diceName: "D20"
			},
			{
				diceSize: 100, 
				diceName: "D100"
			},
		]

		test.each(diceVarieties)("$diceName", (diceObj) => {
			let diceResult = rollDice(diceObj.diceSize);
			expect(diceResult).toBeGreaterThan(0);
			expect(diceResult).toBeLessThanOrEqual(diceObj.diceSize);
		});

	});

})