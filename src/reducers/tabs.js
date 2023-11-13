// reducers/tabsReducer.js
import { SELECT_TAB } from "../actions/shared";

const initialState = {
  selectedTab: null,
  // other state properties...
};

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    // other cases...
    default:
      return state;
  }
};

export default tabs;
