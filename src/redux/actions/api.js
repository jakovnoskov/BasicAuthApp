import { Alert } from 'react-native'

export const defaultApiActionFire = (errorData) => {
  //console.log(errorData)
  return Alert.alert(
    'Error!',
    typeof errorData.message === "string" ? errorData.message : null,
  )
}

export const fetchApi = ({ data, params, callbacks = {} }) => {
  const requestData = {
    id: 0,
    jsonrpc: '2.0',
    ...data
  }
  return async (dispatch) => {
    const result = await fetch(
      params.url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `rpc=${JSON.stringify(requestData)}`
      })
      //обработка в понятный вид
      .then(response => applyres({ response: response }))
      .catch(err => {
        console.log(`\n fetchApi fail \n ${err}\n`)
        return { status: 0, response: null }
      })
    return fetchApiCallback({ result, callbacks, url: params.url, dispatch })
  }
}

const fetchApiCallback = async ({ result, callbacks, url, dispatch }) => {
  // console.log('fetchApiCallback')
  // console.log(result)
  // console.log(typeof result.response.error)

  //!success custom
  if (typeof result.response.error === "object") {
    if (callbacks['fail']) {
      return callbacks['fail'](result)
    } else {
      return defaultApiActionFire(result.response.error)
    }
  }

  if (callbacks[result.status]) {
    return callbacks[result.status](result)
  }

}

//преобразование response
const applyres = async ({ response }) => {
  //console.log('обработчик response')
  //console.log(response)
  let result = {}
  let status = 0
  if (response) {
    status = response ? response.status : 0
    try {
      result = status === 200 && typeof response === 'object' ?
        await response.json() : null
    }
    catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`\n api handler error get result:\n${e}\n`)
      }
      return {
        status: 0,
        response: null
      }
    }
  }

  return {
    response: result,
    status: status
  }
}