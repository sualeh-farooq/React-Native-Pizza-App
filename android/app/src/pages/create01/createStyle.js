import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    homeMainBg: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'red'
        // flexDirection : 'row'
      },
      greetContainer : {
        flex : 1,
        backgroundColor : 'red',
        width : 100,
        height : 20,
      }, 
      linearGradient: {
        // paddingLeft: 15,
        // paddingRight: 15,
        // borderRadius: 5,
        width: 500 ,
        // borderWidth : 2,
        // borderColor : 'red',
        // flex : 1, 
        height : 130
    
      },
      blurCard : {
        backgroundColor : 'rgba(255, 255, 255, 0.8)',
        borderRadius : 25,
        width : 320, 
        height : 200 , 
        marginTop : -280, 
        flexDirection : 'row',
      },
      crustCon : {
        display : 'flex',
        justifyContent : 'center',
      },
      crustConData : {
        // borderWidth : 2, 
        // borderColor : 'red',
        marginLeft : -45,
        padding : 5,
      },
      cartBtn : {
    
      } ,
      cartGradient : {
        width : 120,
        height :30,
        marginTop : 15,
        borderRadius : 20,
        justifyContent : 'center',
        alignContent : 'center',
        alignContent : 'center',
        textAlign : 'center',
      },
      elevation: {
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.7
      },
      blurCard2 : {
        backgroundColor : 'white',
        borderTopRightRadius : 25,
        borderTopLeftRadius : 25,
        width : 320, 
        height : 270 , 
        marginTop : -250, 
        flexDirection : 'column',
        alignContent : 'center',
        // justifyContent : 'center',
        alignSelf : 'center',
        padding : 5,  
      },
      elevation2: {
        elevation: 1,
        shadowColor: '#FFAA6C',
        shadowOpacity: 0.1,
        shadowOffset :10
      }
})

export default styles;