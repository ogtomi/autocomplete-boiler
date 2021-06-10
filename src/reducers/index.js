import { combineReducers } from "redux";
import { FETCH_USERS } from "../actions/types";

const INITIAL_STATE = {
  fetchedUsers: [],
};

const fetchUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, fetchedUsers: action.payload.users };
    default:
      return state;
  }
};

export default combineReducers({
  fetchedUsers: fetchUsersReducer,
});
