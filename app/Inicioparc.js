import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const { width } = Dimensions.get('screen')

export default function InicioParceiro({navigation}) {
  //Ir para a tela de login - Cliente
  const Login = () => {
    navigation.navigate('LoginParceiro')
  }
  //Ir para a tela de cadastro
  const Cadastro = () => {
    navigation.navigate('CadastroParceiro')
  }

  return (
    <View style={estilos.view}>
      <Text style={{marginBottom: 10, color: '#f3b2ca', fontSize: 30}}>Bem-vindo!</Text>
      <Image source={require('././assets/logoParceiros.png')} style={{width: 250, height: 250, marginBottom: 25}}/>
      <View style={{flexDirection: 'row'}}>
         <TouchableOpacity style={{backgroundColor: '#93b7b3', paddingTop: 12, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 100, marginRight: 10}} onPress={Login}>
          <Text style={estilos.buttonTxt}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{ paddingTop: 12, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 100, borderWidth: 2, borderColor: '#93b7b3'}} onPress={Cadastro}>
        <Text style={[estilos.buttonTxt, {color: '#93b7b3'}]}>Cadastro</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  buttonTxt: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  }
})