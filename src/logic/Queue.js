class Queue {
  enqueue(newElement) {
    this.#elements.push(newElement);
  }

  dequeue() {
    return this.#elements.shift();
  }

  isEmpty() {
    return this.#elements.length === 0;
  }

  #elements = [];
}

export default Queue;
