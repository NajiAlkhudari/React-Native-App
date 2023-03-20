import axios from "axios"
import React, { useState, useRef , useEffect } from 'react'
import { View, Text, TouchableOpacity, Linking , StyleSheet  } from 'react-native'
import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'

const Qrcode = ({ route }) => {
  const { tripId } = route.params;

  const qrcodeRef = useRef(null)
  const[qrCode,setQrCode]=useState('');
  const[dayDate, setDayDate]=useState('2023-01-17T19:53:47.5177361+02:00');
  const[result,setResult]=useState("ok");



  const sendData = ()=>
  {
  axios.post('http:',
  {
    qrCode,   
    tripId,
    dayDate,
    result

  }
  
  )
  
    // qrcodeRef.current.reactivate()
 }

 const readData = ()=>
 {
 
   qrcodeRef.current.reactivate()
}
  return (
    <QRCodeScanner
      ref={qrcodeRef}
      onRead={({ data }) => setQrCode(data)}
      flasMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <View style={styles.container} >
          <Text style={styles.text}> Qrcode is {qrCode}</Text>
        </View>
      }
      bottomContent={
        <>
        <View>
        <TouchableOpacity 
            onPress={readData}
            style={{ padding: 12, backgroundColor: "#1769aa", marginTop: 50  ,   borderRadius: 10       }}>
            <Text style={{ color: "#20232a",     fontWeight: 'bold', }}>  اقرأ الرمز</Text>
          </TouchableOpacity>
         
        </View>
        <View>
        <TouchableOpacity 
            onPress={sendData}
            style={{ padding: 12, backgroundColor: "#1769aa", marginTop: 5 ,     borderRadius: 10      }}>
            <Text style={{ color: "#20232a" ,     fontWeight: 'bold', }}> حفظ</Text>
          </TouchableOpacity>
          
        </View>
        </>
      }
    />
  )
}

const styles=StyleSheet.create({
  text:{
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    position: 'absolute',
    width:360,
    height: 170,
    backgroundColor: '#1769aa',
  
  }
})
export default Qrcode;