import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

function AddressScreen({navigation}) {
  const target = require('../../main/assets/images/target.png');
  const home = require('../../main/assets/images/home.png');
  const other = require('../../main/assets/images/location.png');
  const work = require('../../main/assets/images/other.png');
  const blur = require('../../main/assets/images/screen.jpg');

  return (
    <View style ={{
        backgroundColor : '#e6ecf1',
        flex : 1
    }} >
    <View style={styles.AddressMain}>
      <View style={styles.AddressDet}>
        <View style={styles.AddLine}>
          <View style={styles.AddLineUpper}>
            {/* <Text>Icon</Text> */}
            <Image
              source={target}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6D6E9C',
                marginLeft: 17,
              }}>
              Current Location
            </Text>
          </View>
          <Text>Details</Text>
        </View>

        <View style={styles.AddLine}>
          <View style={styles.AddLineUpper}>
            {/* <Text>Icon</Text> */}
            <Image
              source={home}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6D6E9C',
                marginLeft: 25,
              }}>
              Home
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#6D6E9C',
              marginLeft: 27,
            }}>
            3728 Brand Road, Swift Current
          </Text>
        </View>

        <View style={styles.AddLine}>
          <View style={styles.AddLineUpper}>
            {/* <Text>Icon</Text> */}
            <Image
              source={other}
              style={{
                width: 18,
                height: 20,
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6D6E9C',
                marginLeft: 25,
              }}>
              Other
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#6D6E9C',
            }}>
            81 Springside, Lancaster
          </Text>
        </View>

        <View style={styles.AddLine}>
          <View style={styles.AddLineUpper}>
            {/* <Text>Icon</Text> */}
            <Image
              source={work}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6D6E9C',
                marginLeft: 20,
              }}>
              Work
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#6D6E9C',
              marginLeft: 15,
            }}>
            4932 Sixth Street, Westminster
          </Text>
        </View>
      </View>

      <View style={styles.AddDetBottom}>
<Image source={blur}
style = {{
    width : 370 ,
    height : 300
}}
></Image>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AddressMain: {
    color: 'black',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  AddressDet: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
  },
  AddDetBottom: {
    flex: 1,
  },
  AddLine: {
    width: 400,
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    padding: 15,
    flexDirection: 'column',
    // paddingLeft : 50,
    width: 380,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  AddLineUpper: {
    flexDirection: 'row',
    width: 250,
    // justifyContent: 'space-evenly',
  },
});
export default AddressScreen;
