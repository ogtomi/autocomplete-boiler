import React, { useState, useEffect } from "react";
import { fetchUsers } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import "../css/Styles.css";

const App = () => {
  const [userSearch, setUserSearch] = useState("");
  const { fetchedUsers } = useSelector((state) => state.fetchedUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(userSearch));
  }, [userSearch]);

  const renderUsers = () => {
    return fetchedUsers.map((user, index) => {
      return (
        <li
          key={index}
          onClick={() => setUserSearch(user.username)}
          className="listElement"
        >
          <div>{user.username}</div>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <form>
        <label>
          <h3>USERNAME:</h3>
          <input
            type="text"
            placeholder="Search for user..."
            className="inputField"
            value={userSearch}
            onChange={(text) => setUserSearch(text.target.value)}
          />
        </label>
      </form>
      <ul>{renderUsers()}</ul>
    </div>
  );
};

export default App;
