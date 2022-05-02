import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Contact({name, setCash, cash, image}) {
  const [money, setMoney] = useState(0);

  function increase(){
    setMoney(money + 10)
    setCash(cash + 10);
  }

    function decrease(){
        setMoney(money + 10)
        setCash(cash - 10);
  }
  return (
    <View style={styles.contact}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text></Text>
    
        <Button title="Add Price" onPress={increase} />
        <Button title="minus Price" onPress={decrease} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
  },
  details: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },

});