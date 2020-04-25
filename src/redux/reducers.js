import { SET_START_TILE, SET_END_TILE, SELECT_TILE_TYPE } from "./actions";

const initialState = {
  selectedTileType: "Start",
  startTile: null,
  endTile: null,
};

export function pathFindingVisualized(state = initialState, action) {
  switch (action.type) {
    case SET_START_TILE:
      return { ...state, startTile: action.startTile };
    case SET_END_TILE:
      return { ...state, endTile: action.endTile };
    case SELECT_TILE_TYPE:
      return { ...state, selectedTileType: action.selectedTileType };
    default:
      return state;
  }
}
