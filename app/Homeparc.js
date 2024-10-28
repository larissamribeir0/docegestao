import { useState } from 'react'
import { View, StyleSheet, Text, Switch, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Feather } from '@expo/vector-icons'

export default function HomeParceiro({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const addProd = () => {
    navigation.navigate('EditProd')
  }

  return (
    <View style={estilos.view}>
      <View>
        <View style={estilos.topo}>
          <Text style={estilos.topoTxt}>Olá, (nome)!</Text>
          <MaterialCommunityIcons name="account-circle-outline" color={''} size={35} style={{alignItems: 'flex-start'}}/>
        </View>
        <Text style={estilos.pedidosTxt}>Você possui (nº pedidos) novos pedidos</Text>
        <View style={[estilos.topo, {marginTop: 0}]}>
          <Text style={estilos.opcaoTxt}>Suspender novos pedidos</Text>
          <Switch
          trackColor={{false: '#dfdfdf', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#830c4f' : '#c33b80'}
          ios_backgroundColor="#dfdfdf"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={estilos.buttonSwitch}
        />
        </View>
        <Text style={estilos.produtosTxt}>Meus produtos</Text>
        <View style={[estilos.topo, {justifyContent: 'start', marginTop: 0}]}>
          <View style={estilos.produtos}>
            
          </View>
          <View style={estilos.produtos}>
            <Text style={estilos.categoria}>Categoria</Text>
            <Text style={estilos.nome}>Nome do produto</Text>
            <Text style={estilos.valor}>Valor: R$ 00.00</Text>
          </View>
          <View style={[estilos.produtos, {marginTop: 35}]}>
            <Feather name={'edit-2'} color={'#c33b80'} size={20}/>
          </View>
        </View>
        <View style={estilos.icon}>
          <MaterialCommunityIcons name={'plus-circle'} color={'#ff3e89'} size={80} onPress={addProd}/>
        </View>
      
      </View>
      
    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    flex: '100%',
    alignItems: 'center',
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 70,
  },
  topoTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10
  },
  pedidosTxt: {
    fontSize: 17,
    color: '#8f8e8e',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  opcaoTxt: {
    fontSize: 15,
    marginRight: 10
  },
  buttonSwitch: {
    
  },
  produtosTxt: {
    fontSize: 21,
    marginBottom: 10,
  },
  produtos: {
    marginLeft: 10,
  },
  categoria: {
    fontSize: 12,
    color: '#8f8e8e'
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 15
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }
});