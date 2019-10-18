const INITIAL_STATE = {
    isUserAuth: false,
    curentUser: {},
    token: '',
    account: 0,
}

export default (_state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'USER_AUTH':
            return {
                ..._state,
                isUserAuth: action.isUserAuth,
            }

        case 'USER_LOGOUT':
            return {
                ..._state,
                isUserAuth: false
            }

        case 'EDIT_CURENT_USER':
            return {
                ..._state,
                curentUser: action.curentUser,
            }

        case 'SET_TOKEN':
            return {
                ..._state,
                token: action.token,
            }

        case 'SET_ACCOUNT':
            return {
                ..._state,
                account: action.account,
            }

        default:
            return _state
    }
}