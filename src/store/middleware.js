const userInteractionLogger = (store) => (next) => (action) => {
    console.log("User event: ", action);
    return next(action);
  };

export default userInteractionLogger;
