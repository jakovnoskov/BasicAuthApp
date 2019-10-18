import React from 'react'
import {
    View,
    FlatList,
    Text,
    SafeAreaView
} from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { fetchApi } from '../../redux/actions/api'

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingDta: true,
            data: []
        }
    }

    componentDidMount() {
        this.fetchDtaList()
    }

    fetchDtaList = async () => {
        await this.setState({ loadingDta: true })
        this.props.fetchApi({
            params: {
                url: 'https://api-webtrader.ifxdb.com/',
                auth: true,
            },
            data: {
                "method": "getQuotesList",
                "params": {}
            },
            callbacks: {
                200: async ({ status, response }) => {
                    await this.setState({ loadingDta: false })
                    if (response.result && typeof response.result === 'object') {
                        this.setState({ data: response.result })
                    }

                }
            }
        })
    }

    _renderItem = (item) => {
        return (
            <View style={styles.nonsenseItem}>
                <View style={styles.nonsenseItemWrap}>
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
            </View>
        )
    }

    _renderHeader = () => {
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.appInfoBox}>
                    <View style={styles.userNameBox}>
                        <Text style={styles.appTitle}>{this.props.curentUser.Name}</Text>
                    </View>
                    <View style={styles.subInfoBox}>
                        <Text style={styles.appTitle}>{this.props.account}</Text>
                        <Text style={styles.appTitle}>{this.props.curentUser.Currency}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this._renderItem(item)}
                    keyExtractor={(item, i) => i.toString()}
                    ListHeaderComponent={this._renderHeader}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        curentUser: state.user.curentUser,
        account: state.user.account,
    }
}

const mapDispatchToProps = {
    fetchApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)