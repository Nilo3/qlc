import { POST_USER, GET_USERS } from "../action-types/action-types";

const initialState = {
  user: [],
  users: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_USER:
      return {
        ...state,
        user: [...state.user, payload],
      };

    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
};

export default reducer;
