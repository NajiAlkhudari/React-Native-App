import React ,{useState, useEffect}from 'react'
import {View, Button,StyleSheet,FlatList,Text, TouchableOpacity, SafeAreaView} from 'react-native'

const  Inbound =({navigation})=> {
  const [data, setData] = useState(null);

  const getData = async () => {
    const resp = await fetch("");
    const data = await resp.json();
    setData(data);
  };
  //on first mount, fetch data.
  useEffect(() => {
    getData();
  }, []);

  const Item = ({ location}) => (
    <View style={styles.item}>
      <Text style={styles.name}>
        {location}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Qrcode',{tripId : item.tripId})}>
    <Item  location={item.location}  />
    </TouchableOpacity>
  );
headerComponent=()=>{
  return <Text style={styles.listHeadline}> اختر المدينة </Text>
}
itemSeparator=()=>{
  return <View style={styles.separator}/>
}
  return (
    <SafeAreaView style={styles.safe}>

      {data && (
        <FlatList 
        ListHeaderComponentStyle={styles.listHeadr}
       ListHeaderComponent={headerComponent}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparator}
        />
      )}
   
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  listHeadr:{
    height: 55,
    alignItems:'center',
    justifyContent:'center',

  },
  listHeadline:{
    color:'#333',
    fontSize:25,
    fontWeight:'bold',
    // backgroundColor:'#bbdefb'

  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:13,
    // backgroundColor: '#b2dfdb',
    borderWidth:1,
    borderColor:'#333'

  },
  name:{
    fontWeight:'600',
    fontSize:20,
    marginLeft:13,
    paddingHorizontal: 15,

  },
  separator:{
    height:1,
    width:'100%',
    backgroundColor:'#CCC'
  },
  safe:{
    backgroundColor: '#e3f2fd',

  }
})

export default Inbound
