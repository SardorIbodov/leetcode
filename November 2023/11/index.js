var lengthOfLastWord = function (s) {
  let lastSpaceIndex = "";
  s = s.trim();
  if (s.includes(" ")) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") lastSpaceIndex = i;
    }
    return s.slice(lastSpaceIndex + 1, s.length + 1).length;
  } else return s.length;
};
console.log(lengthOfLastWord("Hello World"));
