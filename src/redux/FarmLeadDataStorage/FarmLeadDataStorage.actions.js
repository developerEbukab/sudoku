import {FarmLeadActionTypes } from "./FarmLeadDataStorage.types"

export const toggleReadMe = () => ({
  type:FarmLeadActionTypes.TOGGLE_READ_ME
})

export const toggleTheme = () => ({
  type:FarmLeadActionTypes.SET_THEME
})

export const setIsTourOpen = () => ({
  type:FarmLeadActionTypes.TOGGLE_TOUR_OPEN
})



