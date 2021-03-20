import { combineReducers } from "redux";
import FarmLeadReducer from "./FarmLeadDataStorage/FarmLeadDataStorage.reducers";

export default combineReducers({
  farmLead: FarmLeadReducer,
});