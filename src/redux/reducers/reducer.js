const initialCount = [];

const articlesReducer = (state = initialCount, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case "SUCCESS_FETCH_EXAMPLE":
      // console.log("action.payload", action.payload);
      return action.payload; // todo set loading false
    case "FAILED_FETCH_EXAMPLE":
      return state; // todo set loading false
    default:
      return state; // todo set loading false
  }
};

export default articlesReducer;
