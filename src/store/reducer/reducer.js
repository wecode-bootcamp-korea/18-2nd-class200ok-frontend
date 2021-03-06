const ModalReducer = (state = INIT, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      state.splice(action.payload.id, 1, action.payload.img);
      return state;
    case "DELETE_ITEM":
      const result = state.filter(e => e !== action.payload);
      return result;
    default:
      return state;
  }
};

export default ModalReducer;

const INIT = Array(6).fill(
  "https://media.vlpt.us/images/realsong/post/59772d3d-b155-47c0-9045-4dff5834f2fe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.23.08.png"
);
