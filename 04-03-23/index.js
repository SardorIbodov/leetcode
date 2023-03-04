const array = [
  { id: 1, name: "Alice", createDate: 12 },
  { id: 2, name: "Bob", createDate: 14 },
  { id: 1, name: "Charlie", createDate: 8 },
  { id: 3, name: "David", createDate: 2 },
  { id: 2, name: "Eve", createDate: 30 },
];
const filterUser = (arr) => {
  let checker = [];
  return arr
    .filter((v, i, a) => {
      if (!checker.includes(v.id)) {
        checker.push(v.id);
        return v;
      }
    })
    .sort((a, b) => a.createDate - b.createDate);
};

