class Tile {
  constructor(vertical, horizontal) {
    this.onStateChangeCallback = null;
    this.vertical = vertical;
    this.horizontal = horizontal;
  }

  registerOnStateChangeObserver(onStateChangeCallback) {
    this.onStateChangeCallback = onStateChangeCallback;
  }

  set state(newState) {
    this.#state = newState;
    if (this.onStateChangeCallback) this.onStateChangeCallback(this.#state);
  }

  get state() {
    return this.#state;
  }

  addNeighbour(neighbour) {
    this.#neighbours.push(neighbour);
  }

  neighbours() {
    return this.#neighbours;
  }

  #state = "Default";
  #neighbours = [];
}

export default Tile;
