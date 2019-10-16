import React from 'react'
import { 
  View, 
  FlatList, 
  Text, 
  StyleSheet, 
  SafeAreaView
  } from 'react-native'
import styles from './styles'

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {
            "jsonrpc": "2.0",
            "result": {
                "account": 63482078,
                "user_info": {
                    "Currency": "USD",
                    "Enable": true,
                    "Is5Digit": false,
                    "IsDemo": true,
                    "Leverage": 200,
                    "Name": "Demo Account",
                    "Type": "Standard",
                    "HasNdb": false,
                    "NdbStatus": {
                        "Key": "0",
                        "Value": "Undefined"
                    },
                    "ReadOnly": false
                },
                "token_info": {
                    "token": "34925851dc8edf5963446a89113840f5275d44ab",
                    "expires": 1519317413,
                    "token_refresh": "21c144d9815c861391d1021e0bef40004ec57119"
                }
            }
        },
              "data": {
                    "jsonrpc": "2.0",
                    "result": [
                        {
                            "symbol": "EURUSD",
                            "group": "Forex",
                            "desc": "Euro vs US Dollar"
                        },
                        {
                            "symbol": "GBPUSD",
                            "group": "Forex",
                            "desc": "Great Britain Pound vs US Dollar"
                        },
                        {
                            "symbol": "USDJPY",
                            "group": "Forex",
                            "desc": "US Dollar vs Japanese Yen"
                        },
                        {
                            "symbol": "USDCHF",
                            "group": "Forex",
                            "desc": "US Dollar vs Swiss Franc"
                        },
                        {
                            "symbol": "EURUSD",
                            "group": "Forex",
                            "desc": "Euro vs US Dollar"
                        },
                        {
                            "symbol": "GBPUSD",
                            "group": "Forex",
                            "desc": "Great Britain Pound vs US Dollar"
                        },
                        {
                            "symbol": "USDJPY",
                            "group": "Forex",
                            "desc": "US Dollar vs Japanese Yen"
                        },
                        {
                            "symbol": "USDCHF",
                            "group": "Forex",
                            "desc": "US Dollar vs Swiss Franc"
                        },
                         {
                            "symbol": "EURUSD",
                            "group": "Forex",
                            "desc": "Euro vs US Dollar"
                        },
                        {
                            "symbol": "GBPUSD",
                            "group": "Forex",
                            "desc": "Great Britain Pound vs US Dollar"
                        },
                        {
                            "symbol": "USDJPY",
                            "group": "Forex",
                            "desc": "US Dollar vs Japanese Yen"
                        },
                        {
                            "symbol": "USDCHF",
                            "group": "Forex",
                            "desc": "US Dollar vs Swiss Franc"
                        },
                         {
                            "symbol": "EURUSD",
                            "group": "Forex",
                            "desc": "Euro vs US Dollar"
                        },
                        {
                            "symbol": "GBPUSD",
                            "group": "Forex",
                            "desc": "Great Britain Pound vs US Dollar"
                        },
                        {
                            "symbol": "USDJPY",
                            "group": "Forex",
                            "desc": "US Dollar vs Japanese Yen"
                        },
                        {
                            "symbol": "USDCHF",
                            "group": "Forex",
                            "desc": "US Dollar vs Swiss Franc"
                        },
                          {
                            "symbol": "EURUSD",
                            "group": "Forex",
                            "desc": "Euro vs US Dollar"
                        },
                        {
                            "symbol": "GBPUSD",
                            "group": "Forex",
                            "desc": "Great Britain Pound vs US Dollar"
                        },
                        {
                            "symbol": "USDJPY",
                            "group": "Forex",
                            "desc": "US Dollar vs Japanese Yen"
                        },
                        {
                            "symbol": "USDCHF",
                            "group": "Forex",
                            "desc": "US Dollar vs Swiss Franc"
                        },                                                                    
                    ]
                }      
    }
  }


	_renderItem = (item) => {
		return (
			<View style={styles.nonsenseItem}>
        <View style={styles.subDataItemBox}>
				  <Text style={styles.itemTextdata}>{item.symbol}</Text>
        </View>
        <View style={styles.subDataItemBox}>
         <Text style={styles.itemTextdata}>{item.group}</Text>
        </View>
        <View style={styles.subDataItemBox}>
          <Text style={styles.itemTextdata}>{item.desc}</Text>
        </View>
			</View>
		)
	}

  _renderHeader=() => {
    return (
				<View style={styles.headerWrapper}>
            <View style={styles.appTitleBox}>
                <Text style={styles.appTitle}>Basic Auth App</Text>
            </View>
            <View style={styles.appInfoBox}>
                <View style={styles.userNameBox}>
                  <Text style={styles.appTitle}>{this.state.userData.result.user_info.Name}</Text>
                </View>  
                <View style={styles.subInfoBox}>
                  <Text style={styles.appTitle}>{this.state.userData.result.account}</Text>
                  <Text style={styles.appTitle}>{this.state.userData.result.user_info.Currency}</Text>
                </View>  
            </View>
        </View>
    )
  }
	
	render() {
	
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					data={this.state.data.result}
					renderItem={({item}) => this._renderItem(item)}
					keyExtractor={(item, i) => i}
          ListHeaderComponent={this._renderHeader}
          /> 
			</SafeAreaView>
		)
	}
}

export default UserPage