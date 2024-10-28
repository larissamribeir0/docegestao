import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const { width } = Dimensions.get('screen');

export default function LoginCliente({ navigation }) {
  const [state, setState] = useState(true);

  const HomeCliente = () => {
    navigation.navigate('Menu', { screen: 'HomeCliente' });
  };
  const Cadastro = () => {
    navigation.navigate('Cadastro1');
  };

  const Inicio = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: '10%' }}>
      <Feather name={'chevron-left'} size={50} onPress={Inicio} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Que bom te ver por aqui!</Text>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input} />
        <Text style={[styles.text, {marginLeft: -265}]}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={[styles.text, {marginLeft: -245}]}>Celular</Text>
        <TextInput style={styles.input} />
        <Text style={[styles.text, {marginLeft: -280}]}>CPF</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Senha</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3b1c7',
            borderRadius: 20,
            width: 325,
          }}>
          <TextInput
            style={[styles.input, { width: '90%' }]}
            secureTextEntry={setState ? state : !state}
          />
          <TouchableOpacity onPress={() => setState(!state)}>
            {state && <Feather name={'eye'} color={'#ff3e89'} size={23} />}
            {!state && <Feather name={'eye-off'} color={'#ff3e89'} size={23} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={HomeCliente} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#830c4f',
    fontSize: 35,
    marginTop: -20,
    marginBottom: 20,
  },
  subtitle: {
    color: '#830c4f',
    fontSize: 22,
    marginBottom: 10,
  },
  text: {
    color: '#830c4f',
    fontSize: 17,
    marginBottom: 10,
    marginTop: 15,
    textTransform: 'uppercase',
    marginLeft: -260,
  },
  input: {
    backgroundColor: '#f3b1c7',
    width: 325,
    height: 50,
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 20,
    outline: 0,
  },
  button: {
    backgroundColor: '#83c0b6',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});
