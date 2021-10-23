const logReducers = (state = false, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SIGN IN":
      return true;
    case "SIGN OUT":
      return false;
    default:
      return false;
  }
};

export default logReducers;
