export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, { count: state.count - 1 });
    default:
      return state;
  }
};
