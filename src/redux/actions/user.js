
export function isUserAuth(isUserAuth) {
  return {
    type: 'USER_AUTH',
    isUserAuth
  }
}

export function userLogout() {
  return {
    type: 'USER_LOGOUT',
  }
}

export function editCurentUser(curentUser) {
  return {
    type: 'EDIT_CURENT_USER',
    curentUser
  }
}

export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token
  }
}

export function setAccount(account) {
  return {
    type: 'SET_ACCOUNT',
    account
  }
}

export const setAuth = (response) => async dispatch => {
  console.log('setAuth')
  console.log(response)

  // Сохранение учетных данных
  if (typeof response.account === 'number') {
    await dispatch(setAccount(response.account))
  }
  if (typeof response.user_info === 'object') {
    await dispatch(editCurentUser(response.user_info))
  }
  // Сохранение токена
  await dispatch(setToken(response.token_info.token))

  // переключение режима авторизации
  if (typeof response.token_info.token === 'string') {
    await dispatch(isUserAuth(true))
  }

}

export const resetAurh = (clearPin = true) => dispatch => {
  dispatch(userLogout()) //очищаем redux
}