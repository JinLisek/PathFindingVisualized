export const SET_START_TILE = "SET_START_TILE";
export const SET_END_TILE = "SET_END_TILE";
export const SELECT_TILE_TYPE = "SELECT_TILE_TYPE";

export function setStartTile(tile) {
  return { type: SET_START_TILE, startTile: tile };
}

export function setEndTile(tile) {
  return { type: SET_END_TILE, endTile: tile };
}

export function selectTileType(type) {
  return { type: SELECT_TILE_TYPE, selectedTileType: type };
}
