import { FarmLeadActionTypes } from "./FarmLeadDataStorage.types"

const INITIAL_STATE = {
  isTourOpen: true,
  theme: "light",
  showReadMe: false,
}

const FarmLeadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FarmLeadActionTypes.TOGGLE_READ_ME:
      return {
        ...state,
        showReadMe: !state.showReadMe
      }
    case FarmLeadActionTypes.TOGGLE_TOUR_OPEN:
      return {
        ...state,
        isTourOpen: !state.isTourOpen
      }
    case FarmLeadActionTypes.SET_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      }
    default:
      return state;
  }
}

export default FarmLeadReducer;