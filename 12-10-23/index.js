class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(array) {
  let head = new NodeList(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new NodeList(array[i]);
    current = current.next;
  }
  return head;
}

let list1 = createLinkedList([1, 2, 3]);
let list2 = createLinkedList([1, 3, 5]);


