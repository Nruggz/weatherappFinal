import { StyleSheet } from 'react-native';


const globalStyle = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: T.containerBg,
        justifyContent: 'center',
        alignItems: 'center'
      },
      loadText: {
        color: 'white'
      },
      safeView: {
        flex: 1
      },
      container: {
        flex: 1,
        backgroundColor: T.containerBg,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 0
      },
      heading: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 12
      }
});


export default globalStyle;