import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import DrawerItem from '@react-navigation/drawer';
import styles from './android/app/src/styles/style';
import {SafeAreaView} from 'react-native';
import {Image} from 'react-native';
import {ReactSVG} from 'react';
import HomeScreen from './android/app/src/pages/home/home';
import AddressScreen from './android/app/src/pages/address/address';
const customer = require('./android/app/src/main/assets/images/customer.png');
import Create01 from './android/app/src/pages/create01/create';
import Create02 from './android/app/src/pages/create01/create2';
import Create03 from './android/app/src/pages/create01/create3';
import ConfirmPizza from './android/app/src/pages/confirm/confirm';
import OrderHistory from './android/app/src/pages/history/history';


function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back Payment" />
    </View>
  );
}

function PaymentScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back " />
    </View>
  );
}

function OrderScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back " />
    </View>
  );
}



function HelpScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

function DrawerMenu({navigation}) {
  var profileIcon = require('./android/app/src/main/assets/images/profile.png');
  var PaymentIcon = require('./android/app/src/main/assets/images/payment.png');
  var OrderIcon = require('./android/app/src/main/assets/images/order.png');
  var AddressIcon = require('./android/app/src/main/assets/images/location.png');
  var HelpIcon = require('./android/app/src/main/assets/images/help.png');
  var CircleIcon = require('./android/app/src/main/assets/images/circle.png');
  var ArrowIcon = require('./android/app/src/main/assets/images/arrow.png');
  var SettingIcon = require('./android/app/src/main/assets/images/settings.png');
  var customerImg = require('./android/app/src/main/assets/images/customer.png');
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {/* A Upper Div */}
      <View style={styles.drawerUpper}>
        <View style={styles.customerImg}>
          <Image source={customerImg} style={styles.customerImgBack}>
            {/* Profile Image */}
          </Image>
          <Image source={customerImg} style={styles.customerImgFront}></Image>
          <Text style={styles.customerName}>Jaykey del Mar</Text>
          <Text style={styles.customerEmail}>janedone@gmail.com</Text>
        </View>
      </View>
      {/* A Middle Div */}
      <View style={styles.drawerMiddle}>
        <View style={styles.drawerList}>
          <View style={styles.drawerListOne}>
            <Image
              source={profileIcon}
              style={{
                height: 25,
                width: 25,
              }}></Image>
            <Text
              onPress={() => navigation.navigate('Home')}
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 40,
              }}>
              Profile
            </Text>
          </View>

          <View style={styles.drawerListOne}>
            <View></View>
            <Image
              source={PaymentIcon}
              style={{
                height: 20,
                width: 35,
              }}></Image>
            <Text
              onPress={() => navigation.navigate('Confirm')}
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 30,
              }}>
              Payment Method
            </Text>
          </View>
          <View style={styles.drawerListOne}>
            <Image
              source={OrderIcon}
              style={{
                height: 30,
                width: 30,
              }}></Image>
            <Text
              onPress={() => navigation.navigate('History')}
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 35,
              }}>
              Order History
            </Text>
          </View>
          <View style={styles.drawerListOne}>
            <Image
              source={AddressIcon}
              style={{
                height: 28,
                width: 25,
              }}></Image>
            <Text
              onPress={() => navigation.navigate('Address')}
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 40,
              }}>
              Addresses
            </Text>
          </View>
          <View style={styles.drawerListOne}>
            <Image
              source={HelpIcon}
              style={{
                height: 25,
                width: 25,
              }}></Image>
            <Text
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 40,
              }}>
              Help Center
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.drawerBottom}>
        <View style={styles.drawerList}>
          <View style={styles.drawerListOne}>
            <Image
              source={SettingIcon}
              style={{
                height: 25,
                width: 25,
              }}></Image>
            <Text
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 35,
              }}>
              Settings
            </Text>
          </View>
          <View style={styles.drawerListOne}>
            <Image
              source={CircleIcon}
              style={{
                height: 20,
                width: 17,
                marginLeft: 7,
              }}></Image>
            <Image
              source={ArrowIcon}
              style={{
                height: 10,
                width: 20,
                marginLeft: -30,
                marginTop: 4,
              }}></Image>
            <Text
              style={{
                color: '#6D6E9C',
                fontWeight: '400',
                fontSize: 16,
                marginLeft: 47,
              }}>
              LogOut
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  var BasketImg =  require('./android/app/src/main/assets/images/check.png');
  var homeImg = require('./android/app/src/main/assets/images/homehead.png');
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="History" drawerContent={DrawerMenu}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{title : "Deliver to Home" , headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={BasketImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="Address" component={AddressScreen} options={{title : "Address Details" , headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={BasketImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="Profile Screen" component={ProfileScreen} />
        <Drawer.Screen name="Create01" component={Create01} options={{title : "Uncle John Pizza's" , headerTitleAlign : 'center' ,headerTitleStyle : {fontWeight : '100' , fontFamily : "Arial" , color : 'gray'}  ,  headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={homeImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="Create02" component={Create02} options={{title : "Uncle John Pizza's" , headerTitleAlign : 'center' ,headerTitleStyle : {fontWeight : '100' , fontFamily : "Arial" , color : 'gray'}  ,  headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={homeImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="Create03" component={Create03} options={{title : "Uncle John Pizza's" , headerTitleAlign : 'center' ,headerTitleStyle : {fontWeight : '100' , fontFamily : "Arial" , color : 'gray'}  ,  headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={homeImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="Confirm" component={ConfirmPizza} options={{title : "Uncle John Pizza's" , headerTitleAlign : 'center' ,headerTitleStyle : {fontWeight : '100' , fontFamily : "Arial" , color : 'gray'}  ,  headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={homeImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />
        <Drawer.Screen name="History" component={OrderHistory} options={{title : "Uncle John Pizza's" , headerTitleAlign : 'center' ,headerTitleStyle : {fontWeight : '100' , fontFamily : "Arial" , color : 'gray'}  ,  headerStyle : {backgroundColor : '#fff'} , headerRight : ()=> (<Image source={homeImg} style={{width : 25 , height : 25 , marginRight : 20 , opacity : 0.7}} ></Image> ) }} />



        {/* <Drawer.Screen name="Payment Screen" component={PaymentScreen} /> */}
        {/* <Drawer.Screen name="Order Screen" component={OrderScreen} /> */}
        {/* <Drawer.Screen name="Help Screen" component={HelpScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 82)',
  },
};
