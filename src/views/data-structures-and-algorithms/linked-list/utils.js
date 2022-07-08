export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  append(element) {
    if (!element) return null;
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      const preNode = this.getNode(this.size - 1);
      preNode.next = node;
    }
    this.size++;
  }
  appendAt(position, element) {
    if (position < 0 || position > this.size)
      throw new Error('position out of range');
    const newNode = new Node(element);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const preNode = this.getNode(position - 1);
      newNode.next = preNode.next;
      preNode.next = newNode;
    }
    this.size++;
  }
  remove(position) {
    if (position < 0 || position >= this.size)
      throw new Error('position out of range');
    if (position === 0) {
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    } else {
      const preNode = this.getNode(position - 1);
      const node = this.getNode(position);
      preNode.next = node.next;
      node.next = null;
    }
    this.size--;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(current.element);
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  getNode(index) {
    if (index < 0 || index >= this.size) return new Error('Index out of range');
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}
