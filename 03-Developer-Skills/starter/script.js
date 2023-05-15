'use strict';

const x = () => {
	const y = {
		//value: prompt('Degrees celsius'),
	};
	// using the debugger to find the error
	let v = +y.value + 273;

	return v;
};
console.log(x());

// **** Coding Challenge #1 ****

const printForecast = arr => {
	let text = '...';

	for (let i = 0; i < arr.length; i++) {
		text += `${arr[i]}C in ${i + 1} days ...`;
	}

	console.log(text);
};

printForecast([12, 5, -5, 0, 4]);
