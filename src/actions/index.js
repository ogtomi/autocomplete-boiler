import username from "../apis/username";
import { FETCH_USERS } from "./types";

export const fetchUsers = (search) => async (dispatch) => {
  if (search.length > 0) {
    const response = await username.get(`/users?q=${search}`);
    dispatch({ type: FETCH_USERS, payload: { users: response.data } });
  }
};
