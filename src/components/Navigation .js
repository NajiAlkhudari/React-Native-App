import React, {useContext} from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import Outbound from '../screens/Outbound'
import Inbound from '../screens/Inbound'
import Qrcode from '../screens/Qrcode'
import Camera from '../screens/Camera'





const Stack = createNativeStackNavigator();

const Navigation = ({navigation}) => {
  const {userInfo, splashLoading, logout} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {splashLoading ? (
          <Stack.Screen 
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.isAuthenticated ? (
          <>
          <Stack.Screen name="Home" component={HomeScreen} 
              
                  options={{       title: 'رحلات جامعة القلمون ',
                  headerStyle: {
                    backgroundColor: '#e0f2f1',
                    textAlign:'right'

                   
                  },
                  headerTintColor: '#212121',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => (
                    <Button  title="تسجيل الخروج"   color="#ff3333" onPress={logout} style={{  borderRadius :  30}} />
                    )
                }}

 
          />
                 <Stack.Screen
            name="Outbound"
            component={Outbound}
            />
               <Stack.Screen
            name="Inbound"
            component={Inbound}
            />
                 <Stack.Screen
            name="Qrcode"
            component={Qrcode}
            />
                 <Stack.Screen
            name="Camera"
            component={Camera}
            />
            </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />


          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  welcome: {
    fontSize: 20,
    marginBottom: 8,
    flex:3,
    
    
  },
  nav :{
    backgroundColor: '#80cbc4',

  }
});
export default Navigation;