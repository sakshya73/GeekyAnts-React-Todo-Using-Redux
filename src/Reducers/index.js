import { createStore } from "redux";

const myreducer = (state = [],action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { todocaption: action.todocaption, iscompleted: false }
      ];
    case "DEL_TODO":
      state.splice(action.id, 1);
      return state;
    case "EDIT_TODO":
      state[action.id].todocaption = action.todocaption;
      return state;
    case "CHECK_TODO":
    state[action.id].iscompleted = !state[action.id].iscompleted;
    return state;
    default:
      return state;
  }
};

const store = createStore(myreducer);

export default store;
