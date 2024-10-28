import { View, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native'
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Apresentacao1({navigation}) {
  const Apresentacao2 = () => {
    navigation.navigate('Apresentacao2')
  }

  return(
    <View style={estilos.fundo}>
      <ImageBackground source={require('./assets/fundo1.png')} style={estilos.img}>
        <View style={{marginLeft: 10}}>
        <Text style={estilos.text}>Encomende bolos incríveis de todos os sabores!</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', width: '100%', marginTop: 10}}>
          <MaterialCommunityIcons name={'circle'} color={'#fff'} size={15} style={{marginRight: 5, marginLeft: 10}}/>
          <MaterialCommunityIcons name={'circle'} color={'#ccc'} size={15}/>  
        </View>
        </View>
      
        <TouchableOpacity style={estilos.button} onPress={Apresentacao2}>
          <Feather name={'chevron-right'} color={'#fff'} size={40}/>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1
  },
  img: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    padding: 10,
    backgroundColor: '#fbb5bf',
    borderRadius: '100%',
    margin: 30
  },
  text: {
    color: '#fff',
    fontSize: 35,
    marginLeft: 10
  },
})