import React, {useContext} from 'react';
import { StyleSheet,TouchableOpacity,View , Button, Image , ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
//import {View, Button,Text} from 'react-native'
import { Avatar,  Card, Text } from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  const {userInfo, isLoading, logout , Register} = useContext(AuthContext);


    return (
      <>
        <ScrollView>
      <View style={styles.v}>
      {/* <View >
        <Text style={styles.text}>    أختر نوع الرحلة </Text>
      </View> */}
      <Card style={styles.card} >
        <Card.Content >
          <Text style={styles.text} variant="titleLarge"> ذهاب</Text>
          <Text style={styles.text} variant="bodyMedium">    الذهاب الى البيت  </Text>
        </Card.Content>
        <Card.Cover source={require('../assets/jj.png')} />
        <Card.Actions style={styles.act}>
          <Button title="  حدد المدينة" color="#1769aa" onPress={() => navigation.navigate('Outbound')} >
          Outbound
          </Button>
          
        </Card.Actions>
     
    
        <Card.Content style={styles.card}>
          <Text style={styles.text} variant="titleLarge"> اياب</Text>
          <Text style={styles.text} variant="bodyMedium">العودة الى الجامعة </Text>
        </Card.Content>
        <Card.Cover source={require('../assets/rr.png')} />
        <Card.Actions style={styles.act}>
        <Button title=" حدد المدينة " color="#1769aa"   onPress={() => navigation.navigate('Inbound')} >
          Inbound
          </Button>
        </Card.Actions>
   

      
      <Card.Content style={styles.card}>
          <Text style={styles.text} variant="titleLarge"> الضيوف</Text>
          <Text  style={styles.text} variant="bodyMedium">التقط صورة الهوية</Text>
        </Card.Content>
        <Card.Cover source={require('../assets/EE.png')} />
        <Card.Actions style={styles.act}>
        <Button title="التقط صورة" color="#1769aa"   onPress={() => navigation.navigate('Camera')} >
          Take Photo
          </Button>
        </Card.Actions>
      </Card>
      </View>
      </ScrollView>

      </>
    );
    }    
    const styles=StyleSheet.create({
      text:{
        // flex:1,
        // flexDirection:'row',
        // alignItems:'center',
        backgroundColor: '#e0f2f1',
        // borderWidth:1,b2dfdb
        // borderColor:'#333'
        textAlign:'right',
        fontWeight:'bold'

    
      },
      card:{
                backgroundColor: '#e0f2f1',
                fontWeight: 'bold',
                textAlign:'right'



      },
      vv:{
        backgroundColor:"#e0f2f1",
        textAlign:'right'


      },
 
    })
export default HomeScreen;