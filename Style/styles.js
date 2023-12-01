import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001524',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
      },
      cont: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: '100%',
        width: '100%'
      },
      inBorder: {
        height: 40, 
        width: 240,
        backgroundColor: 'transparent',
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 8,
        paddingLeft: 18,
        color: 'white'
      },
      containerList: {
        flex: 1,
        backgroundColor: '#001524',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
      },
      container1List: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
      },
      backgroundList: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        width: '100%'
      },
      head: { height: 40, backgroundColor: '#FF8F8F' },
      modals: {     
        height: 170,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalViewList: {
        margin: 20,
        height:450,
        width: 330,
        backgroundColor: '#302b63',
        blurRadius: 9,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalTextList: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#C70039'
      },
      modalText1List: {
        fontSize: 20,
        color: 'white'
      },
      modalText2: {
        fontSize: 12,
        color: '#fff8'
      }
  });
  