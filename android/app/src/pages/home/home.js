import * as React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import styles from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen({navigation}) {
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  const createPizza = require('../../main/assets/images/createpizza.png');
  
  const crust = require('../../main/assets/images/crust.png');
  return (
    <View style={styles.homeMainBg}>
      <LinearGradient
        useAngle={true}
        angle={108}
        angleCenter={{x: 0.7, y: 0.6}}
        locations={[0, 0.6]}
        colors={['#F5313F', '#FFAA6C']}
        style={styles.linearGradient}>
        <View
          style={{
            // borderWidth : 2,
            // borderColor : 'yellow',
            paddingLeft: 40,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
            }}>
            Hi Jaykey !
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
            }}>
            What <B>Pizza</B> do You
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 23,
            }}>
            want to try today ?
          </Text>
        </View>
        <View></View>
      </LinearGradient>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={[styles.blurCard, styles.elevation]}>
          <View>
            <Image source={crust} style={{width: 180, height: 200}} />
          </View>
          <View style={styles.crustCon}>
            <View style={styles.crustConData}>
              <Text
                style={{
                  color: '#F5313F',
                  fontWeight: '700',
                  fontSize: 25,
                }}>
                Reorder again ?
              </Text>
              <Text
                style={{
                  color: '#6D6E9C',
                  textTransform: 'uppercase',
                  fontFamily: 'Roboto',
                //   marginTop: 5,
                }}>
                Small , Thin crust 
              </Text>
              <Text
                style={{
                //   marginTop: 5,
                  color: '#6D6E9C',
                  textTransform: 'uppercase',
                  fontFamily: 'Roboto',
                }}>
                Tomatoes , Basil , Cheese{' '}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  color: '#6D6E9C',
                  textTransform: 'uppercase',
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 30,
                }}>
                $12{' '}
              </Text>

              <LinearGradient
                useAngle={true}
                angle={135}
                angleCenter={{x: 0.5, y: 0.6}}
                locations={[0.1, 0.6]}
                colors={['#F5313F', '#FFAA6C']}
                style={styles.cartGradient}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                </Text>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
              {/* Bottom Pizza Div */}

      <View style={{justifyContent : 'center' , alignContent : 'center' , alignSelf : 'center'}} >
        <View style={[styles.blurCard2 , styles.elevation]}>
            <Text 
            style={{
                textAlign : 'center',
                color : '#F5313F',
                fontSize :32,
                marginTop : 5
                }}>Create your <B>own pizza </B></Text>
            <Text 
            style={{
                textAlign:'center',
                color : '#A0A8CC',
                textTransform : 'uppercase',
                marginTop : 5
                }}>the cost will depend on customization</Text>
            <Image  style ={{

                marginRight : 100,
                height : 225,
                marginLeft : 5,
                width : 300
            }}
            
            source={createPizza}/>

        </View>
      </View>
    </View>
  );
}
export default HomeScreen;
