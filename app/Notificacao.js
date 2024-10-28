import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')


export default function Notificacao({navigation}) {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', marginBottom: 25, alignItems: 'center', marginTop: 125, justifyContent: 'center'}}>        
          <Feather name={'chevron-left'} size={40} />
          <Text style={styles.title}>Notificações</Text>
        </View>
        <ScrollView>
        <View style={styles.notificacao}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="account-circle-outline" size={50} />
          </View>
          <View>
            <Text style={styles.tituloNotif}>Título</Text>
            <Text style={styles.mensagem}>Mensagem</Text>
            <Text style={styles.info}>Outras informações</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
  },
  mainView: {
    justifyContent: 'start',
    alignItems: 'start',
    maxHeight: height,
    minHeight: height,
    width: width,
  },
  title: {
    fontSize: 30,
  },
  notificacao: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    width: width - 10,
    backgroundColor: '#ebc7d8',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    
  },
  icon:{
     marginLeft: 20,
     marginRight: 20
  },
  tituloNotif: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  mensagem: {
    fontSize: 15,
    marginBottom: 5
  },
  info: {
    fontSize: 12,
    color: '#707070',
    marginBottom: 5
  }

})