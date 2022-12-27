import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerUpper: {
    backgroundColor: 'white',
    flex: 1.5,
  },
  drawerMiddle: {
    backgroundColor: '#F4F3F9',
    flex: 2.4,
  },
  drawerBottom: {
    backgroundColor: 'White',
    borderColor: 'yellow',
    flex: 1,
  },
  customerImg: {
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    marginTop : 15
  },

  customerImgBack: {
    width: 130,
    height: 130,
    opacity: 0.2,
  },
  customerImgFront: {
    width: 100,
    height: 100,
    marginTop: -115,
  },
  customerName: {
    color: '#6D6E9C',
    fontSize: 20,
    fontWeight : 'bold'
  },
  customerEmail : {
    color : '#A0A8CC',
    fontSize : 15
  },
  drawerList : {
    flexDirection : 'column',
    justifyContent : 'center',
    alignContent : 'center',
    alignItems: 'center',
    // borderColor : 'black',
    // borderWidth : 2,
  },
  profileIcon : {
    width : 30,
    height : 20,

  },
  profileText : {
    color: "#6D6E9C", 
    fontWeight : '400',
    fontSize : 15 ,
    marginLeft : 40,
  },
  drawerListOne : {
    flexDirection : 'row',
    // justifyContent : 'space-around',
    marginTop : 20,
    // paddingLeft : 30,
    // paddingRight : 30,
    // marginLeft : -50,
    // borderColor : 'black',
    // borderWidth : 2,
    width  : 200,
    padding : 3
    // paddingRight : 30
  }
});

export default styles;
