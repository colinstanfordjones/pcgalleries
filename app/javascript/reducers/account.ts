
const INITIAL_STATE = { squares: [], moves: [] }

const Accounts = (state = INITIAL_STATE, action: { type: any; squares: any; move: any }) => {
  switch (action.type) {
    case 'CREATE':
      return {
          squares: action.squares,
          moves: []
        }
    case 'ACTION':
      return {
        squares: action.squares,
        balance: [...state.moves, action.move]
      }
    default:
      return state
  }
}

export default Accounts