import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, ImageBackground, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import zipicon from './assets/images/zipicon.png'
import { Container, Header, Content, Card, CardItem, Body } from 'native-base'
import XMLID from './assets/images/XMLID_46_.png'
import car from './assets/images/sedan-car-model.png'
import karaoke from './assets/images/karaoke.png'
import pack from './assets/images/pack.png'
import store from './assets/images/store.png'
import bg from './assets/images/8969.png'

const App = () => {

  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.header} >
       <View>
        <Text style={styles.zipText} >Zip</Text>
        <Image
        style={styles.tinyLogo}
        source={zipicon}
        />
       </View>
        <Ionicons
            style={styles.seacrh}
            name="search"
            color="white"
            size={23}
        />
        <SimpleLineIcons
            style={styles.basket}
            name="basket-loaded"
            color="white"
            size={23}
        />
        <Ionicons
            style={styles.menu}
            name="menu-sharp"
            color="white"
            size={23}
        />
      </View>
      <View style={styles.body} >
        <Text style={styles.text} >Livré à {''} {''} {''}
          <Text style={styles.colortext} >Angré-8ème Tranche</Text>
        </Text>
        <View>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            color="#F28D45"
            size={23}
          />
          <TextInput
            placeholder="Rechercher un restaurent ou un plat"
            style={styles.textInput}
            onChangeText={() => setSearch()}
          />
          <Octicons
            style={styles.settings}
            name="settings"
            color="grey"
            size={23}
          />
        </View>
      </View>
     
      <View style={styles.footer} >
  {/* CARD FIRST */}
        <View >
          <Container >
              <Content>
                <Card style={styles.blokOne}>
                  <CardItem >
                    <Body style={styles.feed}>
                      <Image 
                      source={XMLID}
                      />
                      <Text style={{top:20, color:'#FF065A'}}>Se nourrir</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>

          <Container >
              <Content>
                <Card style={styles.blokTwo}>
                  <CardItem >
                    <Body style={styles.feed}>
                      <Image 
                      source={karaoke}
                      />
                      <Text style={{top:20, color:'#FF4F00', marginLeft:-8}}>Détente et loisirs</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>

          <Container >
              <Content>
                <Card style={styles.blokThree}>
                  <CardItem >
                    <Body style={styles.feed}>
                      <Image 
                      source={car}
                      />
                      <Text style={{top:30, color:'#B1008D', textAlign:'center'}}>Location de véhicule</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>

          
        </View>
{/*  */}
        <View >
        
          <Container >
              <Content>
                <Card style={styles.blokFour}>
                  <CardItem >
                    <Body style={styles.feed}>
                      <Image 
                      source={XMLID}
                      />
                      <Text style={{top:20, marginLeft:-8, color:'#179113'}}>Bien être et santé</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>

          <Container >
              <Content>
                <Card style={styles.blokFive}>
                  <CardItem >
                    <Body style={styles.feed}>
                      <Image 
                      source={store}
                      />
                      <Text style={{top:20, color:'#3493BE'}}>Shooping</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>

          <Container >
              <Content>
                <Card style={styles.blokSix}>
                  <CardItem >
                    <Body style={styles.feedChange}>
                      <Image 
                      source={pack}
                      />
                      <Text style={{top:20, color:'#F32C2C',textAlign:'center'}}>Collecte et envoie de colis</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
          </Container>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginStart: 20,
    top: 10
  },
  header: {
    flex: 0.7,
    backgroundColor: '#F28D45',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 4.3,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  // cardBlocTwo:{
  //   flexDirection:'row',
  //   justifyContent:'space-between'
  // },
  textInput: {
    // flex:1,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomColor: '#B1B1B1',
    borderTopColor: '#B1B1B1',
    borderRightColor: '#B1B1B1',
    borderLeftColor: '#B1B1B1',
    borderRadius: 5,
    paddingHorizontal: 40,
    marginStart: 20,
    marginEnd: 80,
    marginTop: 20
  },
  searchIcon: {
    position: "absolute",
    top: 36,
    left: 30
  },
  settings:{
    position: "absolute",
    top: 36,
    right: 50,
    transform: [{ rotate: "90deg" }]
  },
  colortext: {
    color: '#2568B0'
  },
  basket:{
    left:35
  },
  seacrh:{
    left:90
  },
  menu:{
    right:20
  },
  zipText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:30
  },
  tinyLogo: {
    width: 20,
    height: 20,
    left:10,
    top:5,
    position:'absolute'
  },
  blokOne:{
    marginEnd:5, 
    marginLeft:25,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#FF065A',
    borderStartColor:'#FF065A',
    borderEndColor:'#FF065A',
    borderBottomColor:'#FF065A',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokTwo:{
    marginEnd:5, 
    marginLeft:25,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#FF4F00',
    borderStartColor:'#FF4F00',
    borderEndColor:'#FF4F00',
    borderBottomColor:'#FF4F00',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokTwo:{
    marginEnd:5, 
    marginLeft:25,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#FF4F00',
    borderStartColor:'#FF4F00',
    borderEndColor:'#FF4F00',
    borderBottomColor:'#FF4F00',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokThree:{
    marginEnd:5, 
    marginLeft:25,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#B1008D',
    borderStartColor:'#B1008D',
    borderEndColor:'#B1008D',
    borderBottomColor:'#B1008D',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokFour:{
    marginEnd:30, 
    marginLeft:20,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#169113',
    borderStartColor:'#169113',
    borderEndColor:'#169113',
    borderBottomColor:'#169113',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokFive:{
    marginEnd:30, 
    marginLeft:20,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#3493BE',
    borderStartColor:'#3493BE',
    borderEndColor:'#3493BE',
    borderBottomColor:'#3493BE',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  blokSix:{
    marginEnd:30, 
    marginLeft:20,
    height:142, 
    width:142,
    borderRadius:5, 
    borderTopColor:'#F32C2C',
    borderStartColor:'#F32C2C',
    borderEndColor:'#F32C2C',
    borderBottomColor:'#F32C2C',
    borderTopWidth:2,
    borderStartWidth:2,
    borderEndWidth:2,
    borderBottomWidth:2,
  },
  feed:{
    alignItems:'center',
    top:20
  },
  feedChange:{
    alignItems:'center',
  },
  image: {
    flex: 1,
  },



});

