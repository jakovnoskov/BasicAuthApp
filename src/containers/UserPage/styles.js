import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
    marginTop: 30,
  },
  itemText: {
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 20,
  },
  headerWrapper: {
    backgroundColor: '#fff',
    borderWidth: 10,
    borderColor: '#fff',
  },
  appTitleBox: {
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#dadada',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 7,
  },
  appTitle: {
    color: '#4c8cd0',
    fontWeight: 'bold',
    fontSize: 17,
  },
  appInfoBox: {
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#dadada',
  },
  userNameBox: {
    padding: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subInfoBox: {
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
  },
  nonsenseItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    height: 70,
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemTextdata: {
    color: '#d5bf91',
    fontSize: 12,
    textAlign: 'center',
  },
  subDataItemBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  }
})