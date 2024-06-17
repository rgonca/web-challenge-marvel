const reducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
