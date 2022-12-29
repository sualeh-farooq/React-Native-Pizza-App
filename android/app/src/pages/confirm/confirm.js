import {View, Button, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './confirmStyle';

export default function ConfirmPizza({navigation}) {
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  const locationImg = require('../../main/assets/images/location.png');
  const cart = require('../../main/assets/images/cart.png');
  const editImg = require('../../main/assets/images/edit.png');
  const payment = require('../../main/assets/images/payment.png');
  const visa = require('../../main/assets/images/visa.png');

  
  return (
    <View style={styles.homeMainBg}>
      <LinearGradient
        useAngle={true}
        angle={108}
        angleCenter={{x: 0.7, y: 0.6}}
        locations={[0, 0.6]}
        colors={['#F5313F', '#FFAA6C']}
        style={{width: 500, height: 150}}>
        <View
          style={{
            // borderWidth : 2,
            // borderColor : 'yellow',
            paddingLeft: 40,
            marginTop: 20,
            marginLeft: -10,
          }}>
          <Image source={cart} />
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              opacity: 0.8,
              fontWeight: '100',
              marginTop: 10,
            }}>
            Checkout
          </Text>
        </View>
      </LinearGradient>

      <View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            // borderWidth: 2,
            // borderColor: 'yellow',
            height: 350,
          }}>
          {/* Main Pizza Div */}
          <View style={[onsheet.detail, styles.elevation]}>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 2,
                width: '80%',
                marginTop: 50,
                padding : 2
              }}>
              <Image style={{width: 23, height : 25}} source={locationImg} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5313F',
                  fontSize: 25,
                  marginLeft: 10,
                }}>
                Delivery Address
              </Text>
              <Image style={{width: 30, height : 30 , borderRadius : 15 , marginLeft : 40}} source={editImg} />

            </View>
            <View
              style={{
                flexDirection: 'column',
                // borderWidth: 2,
                width: '80%',
                marginTop: 10,
                padding : 5,
                marginLeft : -40
              }}>
            
            <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5313F',
                  fontSize: 20,
                  marginLeft: 20,
                  color : '#6D6E9C'
                }}>
                Home
              </Text>
              <Text
                style={{
                  fontWeight: '100',
                  color: '#F5313F',
                  fontSize: 13,
                  marginLeft: 20,
                  color : '#6D6E9C'

                }}>
                3728  Brand Road, Swift Current
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                // borderWidth: 2,
                width: '80%',
                marginTop: 20,
                padding : 5,
                marginLeft : -40
              }}>
            
            <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5313F',
                  fontSize: 20,
                  marginLeft: 20,
                  color : '#6D6E9C'
                }}>
                + Add Delivery Instructions
              </Text>
              
            </View>
            <View
              style={{
                flexDirection: 'column',
                // borderWidth: 2,
                width: '80%',
                marginTop: 20,
                padding : 5,
                marginLeft : -40
              }}>            
            <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5313F',
                  fontSize: 20,
                  marginLeft: 20,
                  color : '#6D6E9C'
                }}>
                Contactless Delivery
              </Text>

              <Text
                style={{
                  fontWeight: '100',
                  color: '#F5313F',
                  fontSize: 13,
                  marginLeft: 20,
                  color : '#6D6E9C'

                }}>
                Rider will place order at your doorstep
              </Text>
            </View>
            
          </View>

          {/* Topping  Div */}

          <View
            style={[onsheet.topping , styles.elevation]}>
               <View
              style={{
                flexDirection: 'row',
                // borderWidth: 2,
                width: '85%',
                marginTop: 20,
                padding : 2,
                alignSelf : 'center'
              }}>
              <Image style={{width: 30, height : 30}} source={payment} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5313F',
                  fontSize: 25,
                  marginLeft: 10,
                }}>
                Payment Method
              </Text>
              <Image style={{width: 30, height : 30 , borderRadius : 15 , marginLeft : 40}} source={editImg} />
            </View>

            {/** Visa Card */}
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 2,
                width: '85%',
                marginTop: 20,
                padding : 2,
                alignSelf : 'center',
                alignItems  : 'center'
              }}>
              <Image style={{width: 30, height : 30}} source={visa} />
              <Text
                style={{
                  fontWeight: '100',
                  color: 'gray',
                  fontSize: 15,
                  marginLeft: 10,
                  marginTop : 8
                }}>
                ....0145
              </Text>
              <Text
                style={{
                  fontWeight: '800',
                  color: '#6D6E9C',
                  fontSize: 20,
                  marginLeft: 130,
                  marginTop : 8
                }}>
                $20.00
              </Text>         
                 </View>
                 <View
              style={{
                flexDirection: 'row',
                // borderWidth: 2,
                width: '85%',
                // marginTop: 20,
                padding : 2,
                alignSelf : 'center',
                alignItems  : 'center'
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  color: '#57C168',
                  fontSize: 12,
                  marginLeft: 10,
                  marginTop : 8,
                  backgroundColor : '#DEF3E1',
                  padding: 5,
                  borderRadius : 10
                }}>
                10% CASHBACK APPLIED
              </Text>
               
                 </View>
           
          </View>

          {/* Button Pizza Div */}

          <LinearGradient
            useAngle={true}
            angle={108}
            angleCenter={{x: 0.7, y: 0.6}}
            locations={[0, 0.6]}
            colors={['#F5313F', '#FFAA6C']}
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: -5,
            }}>
            <View
              style={{
                flex: 1,
                // borderWidth :2,
                alignItems: 'center',
                padding: 5,
              }}>
              <Text onPress={()=>navigation.navigate('History')}
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  color: 'white',
                  // paddingTop: 5,
                }}>
                Place Order
              </Text>
            </View>
          </LinearGradient>
          {/* Child's Div ends Div */}
        </View>
      </View>
    </View>
  );
}

const onsheet = StyleSheet.create({
  detail: {
    // borderWidth: 20,
    borderColor: 'red',
    backgroundColor: 'white',

    opacity: 0.8,
    width: '90%',
    // justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -40,
    height: '80%',
    borderRadius: 30,
    shadowOpacity: 10,
    alignItems: 'center',
  },
  topping :{
    
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      width: '90%',
      alignSelf: 'center',
      height: '43%',
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 30,
      // padding: 10,

    
  }
});
