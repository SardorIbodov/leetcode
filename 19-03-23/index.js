const isValid = (string) => {
  let stack = [];
  let openingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		if(char in openingBrackets) {
			stack.push(char);
		} else {
			let lastOpeningBracket = stack.pop();
			if(openingBrackets[lastOpeningBracket] !== char) {
				return false;
			}
		}
	}
	return stack.length === 0;
};

console.log(isValid("({[]})"));

// "(" => ["("]
// "{" => ["(", "{"]
// "[" => ["(", "{", "["]
// "]" => ["(", "{"]
// "}" => ["("]
// ")" => []
