import { Text, View, TouchableOpacity } from 'react-native';

export default function Perfil({navigation}) {
  const Sair = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={Sair}><Text style={{fontSize: 20}}>Sair da conta</Text></TouchableOpacity>
    </View>
  );
}