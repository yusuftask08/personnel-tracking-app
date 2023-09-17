const userInteractionLogger = (store) => (next) => (action) => {
    console.log("Kullanıcı Etkileşimi: ", action);
    next(action);
  };

export default userInteractionLogger;
