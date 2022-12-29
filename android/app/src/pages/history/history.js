import {View, Button, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './historystyle';

export default function OrderHistory({navigation}) {
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  const locationImg = require('../../main/assets/images/location.png');
  const cart = require('../../main/assets/images/cart.png');
  const editImg = require('../../main/assets/images/edit.png');
  const payment = require('../../main/assets/images/payment.png');
  const visa = require('../../main/assets/images/visa.png');
  const detail = require('../../main/assets/images/orderDetail.png');
  const orderconfirm = require('../../main/assets/images/orderconfirm.png');
  const prepare = require('../../main/assets/images/prepare.png');
  const transit = require('../../main/assets/images/transit.png');
  const deliver = require('../../main/assets/images/deliver.png');
  const cashback = require('../../main/assets/images/cashback.png');
  const ahead = require('../../main/assets/images/ahead.png');






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
          <Image style={{width: 40, height: 40}} source={detail} />
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              opacity: 0.8,
              fontWeight: '100',
              marginTop: 10,
            }}>
            Order Details
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
                width: '100%',
                marginTop: 50,
                justifyContent : 'center',
                paddingBottom : 2,
                borderBottomWidth :0.5
                // padding: 2,
                // marginLeft : -20
              }}>
                <View style={{   width : 100, alignItems : 'center' }}>
                  <Text  style={{ color : '#6D6E9C', fontSize : 15 , fontWeight : '400' }}>ORDERED ON</Text>
                  <Text  style={{ color : '#F5313F', fontSize : 22 , fontWeight : '800' }}>28 Dec</Text>
                </View>
                <View style={{   width : 100, alignItems : 'center' }}>
                  <Text  style={{ color : '#6D6E9C', fontSize : 15 , fontWeight : '400' }}>INVOICE #</Text>
                  <Text  style={{ color : '#F5313F', fontSize : 22 , fontWeight : '800' }}>#15569</Text>
                </View>
                <View style={{  width : 100, alignItems : 'center' }}>
                  <Text  style={{ color : '#6D6E9C', fontSize : 15 , fontWeight : '400' }}>TOTAL DUE</Text>
                  <Text  style={{ color : '#F5313F', fontSize : 22 , fontWeight : '800' }}>$20.00</Text>
                </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                // borderWidth: 2,
                width: '80%',
                marginTop: 12,
                padding: 3 ,
                height : '70%'
                // marginLeft: -40,
              }}>
            <View style={{   width : '100%', alignItems : 'center'  , flexDirection : 'row' , marginTop : 15 , padding : 5   }}>
              <Image  style={{width : 30 , height : 30 , borderRadius : 20}} source={orderconfirm}/>
                  <Text  style={{ color : '#6D6E9C', fontSize : 22 , fontWeight : '700', marginLeft : 20 }}>Order Confirmed</Text>
                  <Text  style={{ color : '#6D6E9C', fontSize : 12 , fontWeight : '700', marginLeft : 10 }}>11 : 41 AM</Text>

            </View>
            <View style={{   width : '100%', alignItems : 'center'  , flexDirection : 'row' , marginTop : 15 , padding : 5  }}>
              <Image  style={{width : 30 , height : 30 , borderRadius : 20}}  source={prepare}/>
                  <Text  style={{ color : '#6D6E9C', fontSize : 22 , fontWeight : '700', marginLeft : 20 }}>Preparing ....</Text>
                  <Text  style={{ color : '#6D6E9C', fontSize : 12 , fontWeight : '700', marginLeft : 10 }}>12 : 01 PM</Text>

            </View>
            <View style={{   width : '100%', alignItems : 'center'  , flexDirection : 'row' , marginTop : 15 , padding : 5  }}>
              <Image  style={{width : 35 , height : 35 }}  source={transit}/>
                  <Text  style={{ color : '#6D6E9C', fontSize : 22 , fontWeight : '100', marginLeft : 20 }}>In Transit </Text>
            </View>
            <View style={{   width : '100%', alignItems : 'center'  , flexDirection : 'row' , marginTop : 15 , padding : 5  }}>
              <Image  style={{width : 35 , height : 35 }}  source={deliver}/>
                  <Text  style={{ color : '#6D6E9C', fontSize : 22 , fontWeight : '100', marginLeft : 20 }}>Delivered</Text>
            </View>
            
            </View>

       
          </View>

          {/* Topping  Div */}



          <View style={[onsheet.topping, styles.elevation]}>
          <View style={{   width : '100%', alignItems : 'center'  , flexDirection : 'row' , marginTop : 5 , padding : 5 ,alignContent : 'center'  , paddingBottom : 10  }}>
              <Image  style={{width : 65 , height : 65 }}  source={cashback}/>
                  <Text  style={{ color : '#57C168', fontSize : 22 , fontWeight : '100', marginLeft : 10 , fontWeight : 'bold'  }}>Earned Cashback</Text>
                  <Text  style={{ color : '#6D6E9C', fontSize : 15 , fontWeight : '100', marginLeft : -145  , marginTop : 40  }}>+ $2.00</Text>

                  <View style={{backgroundColor : '#8cd494' , borderWidth : 0.5 , width : "20%", height : '135%' , marginLeft : 135  , borderTopRightRadius : 20 , borderBottomRightRadius : 20 , alignItems : 'center' , justifyContent : 'center' }}>
                    <Image style={{width : 30, height : 30}} source={ahead} />
                  </View>
            </View>
            
          </View>

          {/* Button Pizza Div */}
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
    height: '110%',
    borderRadius: 30,
    shadowOpacity: 10,
    alignItems: 'center',
  },
  topping: {
    backgroundColor: '#DEF3E1',
    width: '90%',
    alignSelf: 'center',
    height: '23%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20, 
    borderColor : '#57C168',
    borderWidth : 1,
    flexDirection : 'row',
     
    // padding: 10, 
  },
});
