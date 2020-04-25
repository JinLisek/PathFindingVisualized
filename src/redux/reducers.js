import { SET_START_TILE, SET_END_TILE } from "./actions";

const initialState = {
  startTile: null,
};

export function pathFindingVisualized(state = initialState, action) {
  switch (action.type) {
    case SET_START_TILE:
      return { ...state, startTile: action.startTile };
    case SET_END_TILE:
      return { ...state, endTile: action.endTile };
    default:
      return state;
  }
}
