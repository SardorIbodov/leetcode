// Excel Sheet Column Title
// A -> 1
// B -> 2
// ...
// AA -> 27
// AB -> 28
const convertToTitle = columnNumber => {
	let column;
	let result = "";
	while(columnNumber > 0) {
		column = columnNumber % 26;
		if(column === 0) column = 26;
		result = String.fromCharCode(64 + column) + result;
		columnNumber = (columnNumber - column) / 26;
	}
	return result;
}

