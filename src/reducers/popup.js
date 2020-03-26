const popup = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_POPUP":
      return [
        {
          show: true
        }
      ];

    default:
      return state;
  }
};

export default popup;
