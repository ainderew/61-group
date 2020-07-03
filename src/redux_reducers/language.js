export const languageReducer = (
  state = {lang: "Russian"},
  action) => {
  switch (action.type) {
    case "Russian":
      return (state = { lang: "Russian" });
    case "English":
      return (state = { lang: "English" });
    default:
      return state;
      break;
  }
};
