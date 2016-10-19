const initialState = {
  fetching: false,
  isLogged: false,
  isValid: true
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        fetching: action.payload
      })
    case 'LOGIN_SUCCES':
      return Object.assign({}, state, {
        isLogged: action.payload
      })
    case 'LOGIN_FAIL':
      return Object.assign({}, state, {
        fetching: action.payload,
        isValid: action.payload
      })
    default:
      return state;
  }

}
