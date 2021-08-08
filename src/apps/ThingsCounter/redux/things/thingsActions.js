import {
  SAVE_THING,
  UPDATE_THING,
  DELETE_THING,
  DECREMENT_THING_COUNT,
  INCREMENT_THING_COUNT,
  RESET_THING_COUNT,
  RESTORE_THINGS_STATE_FROM_LOCAL_STORAGE
} from './thingsTypes'

export const saveThing = thing => {
  return {
    type: SAVE_THING, thing
  }
}

export const deleteThing = thingId => {
  return {
    type: DELETE_THING, thingId
  }
}

export const updateThing = (thingId, thingDataToUpdate) => {
  return {
    type: UPDATE_THING, thingId, thingDataToUpdate
  }
}

export const incrementThingCount = thingId => {
  return {
    type: INCREMENT_THING_COUNT, thingId
  }
}

export const decrementThingCount = thingId => {
  return {
    type: DECREMENT_THING_COUNT, thingId
  }
}

export const resetThingCount = thingId => {
  return {
    type: RESET_THING_COUNT, thingId
  }
}

export const restoreThingsStateFromLocalStorage = () => {
  return {
    type: RESTORE_THINGS_STATE_FROM_LOCAL_STORAGE
  }
}