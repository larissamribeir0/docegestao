import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const { width } = Dimensions.get('screen')

export default function Inicio({navigation}) {
  //Ir para a tela de login - Cliente
  const Login = () => {
    navigation.navigate('LoginCliente')
  }
  //Ir para a tela de cadastro
  const Cadastro = () => {
    navigation.navigate('CadastroCliente')
  }
  //Fazer login com o Google
  const Google = () => {

  }
  //Ir para a tela de Inicio - Parceiro
  const InicioParceiro = () => {
    navigation.navigate('InicioParceiro')
  }

  return (
    <View style={estilos.view}>
      <Text style={{marginBottom: 10, color: '#f3b2ca', fontSize: 30}}>Bem-vindo!</Text>
      <Image source={require('./assets/logo.png')} style={{width: 250, height: 250, marginBottom: 25}}/>
      <View style={{flexDirection: 'row'}}>
         <TouchableOpacity style={{backgroundColor: '#93b7b3', paddingTop: 12, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 100, marginRight: 10}} onPress={Login}>
          <Text style={estilos.buttonTxt}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{ paddingTop: 12, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 100, borderWidth: 2, borderColor: '#93b7b3'}} onPress={Cadastro}>
        <Text style={[estilos.buttonTxt, {color: '#93b7b3'}]}>Cadastro</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ paddingTop: 12, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, borderRadius: 100, borderWidth: 2, borderColor: '#93b7b3', marginTop: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 25}} onPress={Google}>
        <Ionicons name={'logo-google'} color={'#93b7b3'} size={25}/>
        <Text style={[estilos.buttonTxt, {color: '#93b7b3', marginLeft: 10}]}>Conectar com o Google</Text>
      </TouchableOpacity>
      <Text style={{color: '#c0428a', fontWeight: 'bold', fontSize: 15}} onPress={InicioParceiro}>Acesso para parceiros</Text>
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