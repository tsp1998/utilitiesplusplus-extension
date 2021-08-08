import {
  SAVE_THING,
  DELETE_THING,
  UPDATE_THING,
  DECREMENT_THING_COUNT,
  INCREMENT_THING_COUNT,
  RESET_THING_COUNT,
  RESTORE_THINGS_STATE_FROM_LOCAL_STORAGE
} from './thingsTypes'

const initialState = []

const thingsReducer = (things = initialState, action) => {
  switch (action.type) {
    case SAVE_THING: {
      const { thing } = action
      const thingIndex = things.findIndex(thingFromState => thingFromState.name === thing.name)
      if (thingIndex === -1) {
        thing.id = Date.now()
        thing.count = 0
        return [...things, thing];
      }
      return things
    }

    case DELETE_THING: {
      const { thingId } = action
      const updatedThings = things.filter(thing => thing.id !== thingId)
      return updatedThings
    }

    case UPDATE_THING: {
      const { thingId, thingDataToUpdate } = action
      const updatedThings = things.map(
        thing => thing.id === thingId ? { ...thing, ...thingDataToUpdate } : thing
      )
      return updatedThings;
    }

    case INCREMENT_THING_COUNT: {
      const { thingId } = action
      const updatedThings = things.map(
        thing => thing.id === thingId ? { ...thing, count: thing.count + 1 } : thing
      )
      return updatedThings;
    }

    case DECREMENT_THING_COUNT: {
      const { thingId } = action
      const updatedThings = things.map(
        thing => thing.id === thingId ? { ...thing, count: thing.count - 1 } : thing
      )
      return updatedThings;
    }

    case RESET_THING_COUNT: {
      const { thingId } = action
      const updatedThings = things.map(
        thing => thing.id === thingId ? { ...thing, count: 0 } : thing
      )
      return updatedThings;
    }

    case RESTORE_THINGS_STATE_FROM_LOCAL_STORAGE: {
      try {
        const thingsCounterAppData = JSON.parse(localStorage.getItem('ThingsCounterAppData'))
        if (thingsCounterAppData) {
          return thingsCounterAppData.things;
        }
      } catch (error) {
        return things
      }
    }

    default: return things;
  }
}

export default thingsReducer