class Tile {
  constructor(vertical, horizontal) {
    this.onStateChangeCallback = null;
    this.#state = "Default";
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

  neighbours() {
    let neighbours = [];
    if (this.top) neighbours.push(this.top);
    if (this.right) neighbours.push(this.right);
    if (this.bottom) neighbours.push(this.bottom);
    if (this.left) neighbours.push(this.left);

    return neighbours;
  }

  #state = "Default";

  top = null;
  right = null;
  bottom = null;
  left = null;
}

export default Tile;
