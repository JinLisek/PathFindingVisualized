import Queue from "../logic/Queue";

const breadthFirstSearch = async (startTile, endTile) => {
  startTile.state = "Start";
  let frontier = new Queue();
  frontier.enqueue(startTile);
  let visited = new Set();
  visited.add(startTile);

  while (frontier.isEmpty() === false) {
    const currentTile = frontier.dequeue();
    for (const nextTile of currentTile.neighbours()) {
      if (visited.has(nextTile) === false) {
        if (nextTile === endTile) return;
        frontier.enqueue(nextTile);
        nextTile.state = "Visited";
        visited.add(nextTile);
        await new Promise((r) => setTimeout(r, 100));
      }
    }
  }
};

export default breadthFirstSearch;
