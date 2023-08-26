

function rollDice(diceSize = 6){

	// Math.floor always rounds down, so diceSize of 6 would be 0-5
    // Add 1 to guarantee that it stays within sensible range, 
    // eg. diceSize of 6 means possible results are 1-6 
	let diceTotal = Math.floor(Math.random() * diceSize) + 1;

	return diceTotal;
}


function rollDiceWithDisadvantage(diceSize = 6){
	let result = {
		finalResult: null,
		rolls: []
	}

	result.rolls = [
		rollDice(diceSize), 
		rollDice(diceSize)
	];
	//let someArray = [1, 2, 3, 4];

	// Copy result.Rolls into a new array that only exists
	// for Math.min() to analyse
	result.finalResult = Math.min(...result.rolls);

	return result;
}

function rollDiceWithAdvantage(diceSize = 6){
	let result = {
		finalResult: null,
		rolls: []
	}

	result.rolls = [
		rollDice(diceSize), 
		rollDice(diceSize)
	];
	//let someArray = [1, 2, 3, 4];

	// Copy result.Rolls into a new array that only exists
	// for Math.max() to analyse
	result.finalResult = Math.max(...result.rolls);

	return result;
}


module.exports = {
	rollDice,
	rollDiceWithDisadvantage,
	rollDiceWithAdvantage
}