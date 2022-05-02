import { StyleSheet, Text, View, Button,ScrollView,StatusBar} from 'react-native';
import {useState} from 'react';

import Contact from './Food';

export default function App() {
  const [cash, setCash] = useState(0);
  const [price, setPrice] = useState(0);


  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1, height:50}}>
      <Text style={{fontSize: 24}}>The total age is {cash}</Text>
      <Contact name="Bread" phoneNumber="10" price={20} image={'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'} cash={cash} setCash={setCash} />
      <Contact name="Chips" phoneNumber="15" price={20} image={'https://media.istockphoto.com/photos/styrofoam-meal-box-isolated-on-white-background-picture-id1284958283'} cash={cash} setCash={setCash} />
      <Contact name="Biscuits" phoneNumber="16" price={20} image={'https://www.bigbasket.com/media/uploads/p/l/40050164_11-anmol-butter-bake-cookies-healthy-delicious-biscuits-tea-time-snack.jpg'} cash={cash} setCash={setCash} />
      <Contact name="cookies" phoneNumber="16" price={20} image={'https://www.pacagemockup.com/wp-content/uploads/2020/07/Cookies-Packaging-Mockup-758x505.jpg'} cash={cash} setCash={setCash} />
      <Contact name="Pap and beef" phoneNumber="16" price={20} image={'https://z-m-scontent.fmsu3-1.fna.fbcdn.net/v/t1.6435-9/202844334_356366859239229_7352775565015803608_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=103&ccb=1-5&_nc_sid=8024bb&_nc_ohc=M5GEJEjsMxcAX_zmMfv&_nc_ad=z-m&_nc_cid=4049&_nc_pt=5&_nc_eh=ae4e54dee994b7c74deb4a51a5cabc69&_nc_rml=0&_nc_ht=z-m-scontent.fmsu3-1.fna&oh=00_AT_osIx3NM5kV18897IGZRKylG2HSjkRiGq5-BqG2FB4yA&oe=62951848'} cash={cash} setCash={setCash} />
      <Contact name="Pap and meat" phoneNumber="16" price={20} image={'https://z-m-scontent.fmsu3-1.fna.fbcdn.net/v/t1.6435-9/125985999_101834295096267_2803601863508905934_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=101&ccb=1-5&_nc_sid=85a577&_nc_ohc=3RgJvaK80jwAX8XPvuk&_nc_ad=z-m&_nc_cid=4049&_nc_pt=5&_nc_eh=ae4e54dee994b7c74deb4a51a5cabc69&_nc_rml=0&_nc_ht=z-m-scontent.fmsu3-1.fna&oh=00_AT84ABHMwVR0tJKtiSdzVDwbKnIVUY6KnhWWPQ9_yp5gAA&oe=6292ABFD'} cash={cash} setCash={setCash} />
      <Contact name="Reboost" phoneNumber="16" price={20} image={'https://www.shoprite.co.za/medias/medias-10537926EA-en-20190726.png?context=bWFzdGVyfGltYWdlc3w2NTA4NjZ8aW1hZ2UvcG5nfGltYWdlcy9oOTQvaGI4Lzg4NTk2MTg2MDcxMzQucG5nfDMxNjMyYWJmMjcwMTg3MWRmMjc3NjY3ZDE5NGE1NzMyMjk5YWI2NjM4YzI5MTU3ODcyOWU4ZDAyNjNkMzZiZDA'} cash={cash} setCash={setCash} />
      <Contact name="Rice and salads" phoneNumber="16" price={20} image={'https://media.istockphoto.com/photos/chicken-schnitzel-with-brown-rice-and-salad-picture-id184345585?k=6&m=184345585&s=170667a&w=0&h=ZR8xHSz4Ty4R19HS2JjOqPeeJoHWh7mQT2kZIb1z-co='} cash={cash} setCash={setCash} />
      <Contact name="Buns" phoneNumber="16" price={20} image={'https://dinnerthendessert.com/wp-content/uploads/2018/05/Easy-Pulled-Pork-3-500x750.jpg'} cash={cash} setCash={setCash} />
      <Contact name="Hot Dogs" phoneNumber="16" price={20} image={'https://th.bing.com/th/id/R.ea87f94a84891f5caccbea759d8c91b2?rik=yhShrvH6Si4ATQ&riu=http%3a%2f%2fifoodography.files.wordpress.com%2f2012%2f11%2f20121127-153616.jpg&ehk=g4PewexpVXTKqTLbI%2fUchGL%2f%2f39WxeH7OLX3Oomz4Io%3d&risl=&pid=ImgRaw&r=0'} cash={cash} setCash={setCash} />
      </ScrollView>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});