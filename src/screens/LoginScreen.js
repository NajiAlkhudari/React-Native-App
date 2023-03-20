import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, userInfo,login} = useContext(AuthContext);

  return (
    
    <View style={styles.container}>
              <Text style={styles.tex}>تسجيل الدخول</Text>
              <Text style={styles.te} >اهلاً! الرجاء ادخال التفاصيل </Text>


      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <Text style={styles.text} >اسم المتخدم</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="ادخل اسم المستخدم"
          onChangeText={text => setUsername(text)}
        />
        <Text style={styles.text}>كلمة المرور</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="ادخل اسم المستخدم"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="تسجيل الدخول"
          onPress={() => {
            try{   login(username, password);
            } catch(e) 
            { alert(e); }
          
          }}
        />

        {/* <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('TwoWay')}>
            <Text style={styles.link}>TwoWay</Text>
          </TouchableOpacity>
          <Text>||
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#e0f2f1"
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    textAlign:'right'

  },
  link: {
    color: 'red',
  },
  text :{
    fontSize: 10,
        fontWeight:'700',
        color:'#616161',
        textAlign:'right'


  },
  te :{
    fontSize: 14,
        fontWeight:'700',
        height: '18%',
        color:'#424242'


  },
  tex :{
    fontSize: 50,
        fontWeight:'900',
        height: '13%',
        color:"#212121"


  }
});

export default LoginScreen;