import { INCREMENT, DECREMENT } from "../actions/counter";

const initialState = 0;
// reducer counter
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

export default counter;
