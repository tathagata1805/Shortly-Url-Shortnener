import { createStore } from 'redux'

const INITIAL_STATE = {
  list: []
}

function link(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload }
    case 'ADD_LINK':
      return {
        ...state,
        list: [
          ...state.list,
          {
            original: action.payload.original,
            short: action.payload.short
          }
        ]
      }
    default:
      return state
  }
}

const store = createStore(link)

export default store
