import {Alert} from 'react-native'

export const setLogin = login => ({
    type: 'SET_LOGIN',
    login,
})

export const setPassword = password => ({
    type: 'SET_PASSWORD',
    password
})

export const fetchApi = (apiData) => {
    console.log(apiData)
    const params = {
        id: 0,
        jsonrpc: '2.0',
        ...apiData.data
    }
    console.log(params)
    return async (dispatch) => {
        try {
            let response = await fetch(
                apiData.params.url, 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `rpc=${JSON.stringify(params)}` 
            })
            console.log(`rpc=${JSON.stringify(params)}`)
            console.log(response)
            const jsonData = await response.json()
            console.log(jsonData)
            if(jsonData.error) {
                return Alert.alert(
                    jsonData.error.code.toString(),
                    jsonData.error.message,
                ) 
            }
        } catch (error) {
            console.log(error.error)
            return Alert.alert(
                error.code,
                error.message,
            ) 
        }
    } 
}