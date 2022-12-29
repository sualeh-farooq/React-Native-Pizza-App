import {View, Button, StyleSheet, Text, Image} from 'react-native';
import styles from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';

export default function Create03({navigation}) {
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  const Pizza03 = require('../../main/assets/images/pizza3.png');
  return (
    <View style={styles.homeMainBg}>
      <LinearGradient
        useAngle={true}
        angle={108}
        angleCenter={{x: 0.7, y: 0.6}}
        locations={[0, 0.6]}
        colors={['#F5313F', '#FFAA6C']}
        style={{width : 500 , height : 220}}>
        <View
          style={{
            marginLeft: 270,
            marginBottom: -43,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: 'white',
            }}>
            $20.00
          </Text>
        </View>
        <View
          style={{
            // borderWidth : 2,
            // borderColor : 'yellow',
            paddingLeft: 40,
            marginTop: 10,
            marginLeft: -10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              opacity: 0.8,
            }}>
            Create Your Pizza
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              opacity: 0.6,
              marginLeft: -4,
            }}>
            <B> MEDIUM , THICK </B>, TOPPINGS
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

          <View
            style={{
              borderWidth: 20,
              borderColor: 'white',
              opacity: 0.9,
              width: '90%',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: -100,
              height: '90%',
              borderRadius: 200,
              shadowOpacity: 10,
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 380,
                height: 420,
                marginTop: 50,
              }}
              source={Pizza03}
            />
          </View>

          {/* Topping  Div */}

          <View
            style={{
              backgroundColor: '#F9F7FB',
              width: '80%',
              alignSelf: 'center',
              height: '25%',
              marginTop: 15,
              marginBottom: 20,
              borderRadius: 20,
              padding: 10,
            }}>
            <View
              style={{
                // borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#6D6E9C',
                  fontWeight: '200',
                  fontSize: 22,
                }}>
                Choose up to <B>3 Toppings </B>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // borderWidth: 2,
                width: '100%',
                alignSelf: 'center',
                padding: 8,
                justifyContent: 'space-between',
              }}>
             

              <LinearGradient
                useAngle={true}
                angle={108}
                angleCenter={{x: 0.5, y: 0.5}}
                locations={[0.3, 0.9]}
                colors={['#F5313F', '#FFAA6C']}
                style={{width: "35%", height: "90%" , alignSelf : 'center' , borderRadius : 20 , justifyContent : 'center' }}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      textAlign : 'center',
                      fontWeight : 'bold',
                      alignContent : 'center',
                    }}>
                    Pepperoni{' '}
                  </Text>
                </View>
              </LinearGradient>

              <Text
                style={{
                  color: '#6D6E9C',
                  fontSize: 17,
                  padding: 5,
                }}>
                Sausage
              </Text>

              <Text
                style={{
                  color: '#6D6E9C',
                  fontSize: 15,
                  padding: 5,
                }}>
                Mushroom
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
                style={{width: "100%", height: "90%" , alignSelf : 'center' , justifyContent : 'center' , marginTop : -5 }}>
                <View style={{
                    flex : 1,
                    // borderWidth :2,
                    alignItems : 'center',
                    padding : 5
                }}>
                 <Text onPress={()=>navigation.navigate('Confirm')} style={{
                    fontWeight : '800',
                    fontSize : 18,
                    color : 'white',
                    paddingTop : 5
                 }}> 
                 CONFIIRM PIZZA
                  </Text>
                </View>
              </LinearGradient>
          {/* Child's Div ends Div */}


        </View>
      </View>
    </View>
  );
}
