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

  #state = "Default";

  top = null;
  right = null;
  bottom = null;
  left = null;
}

export default Tile;
