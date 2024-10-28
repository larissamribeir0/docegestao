import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export default function PedidosCliente({navigation}) {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25, marginTop: 125}}>
          <Feather name={'chevron-left'} size={50} />
          <Text style={styles.title}>Sacola</Text>
        </View>
        <Text style={styles.titles}>Pendentes</Text>
        <View style={styles.pedidos}>

          <View>
            <Text style={styles.produto}>Nome do produto</Text>
            <Text style={styles.confeitaria}>Nome da confeitaria</Text>
            <Text style={styles.tempo}>Data de entrega</Text>
          </View>
        </View>
        <Text style={styles.titles}>Encomendas</Text>
        <View style={styles.pedidos}>

          <View>
            <Text style={styles.produto}>Nome do produto</Text>
            <Text style={styles.confeitaria}>Nome da confeitaria</Text>
            <Text style={styles.tempo}>Data de entrega</Text>
          </View>
        </View>
        <Text style={styles.titles}>Concluídos</Text>
        <View style={styles.pedidos}>

          <View>
            <Text style={styles.produto}>Nome do produto</Text>
            <Text style={styles.confeitaria}>Nome da confeitaria</Text>
            <Text style={styles.tempo}>Data de entrega</Text>
          </View>
        </View>
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
  titles: {
    color: '#707070',
    fontSize: 25,
    fontWeight: 300,
    marginLeft: 20
  },
  pedidos: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20
  },
  imgProduto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 15
  },
  produto: {
    fontSize: 15,
    color: '#707070',
    fontWeight: 'bold'
  },
  confeitaria: {
    fontSize: 15,
    color: '#707070',
  },
  tempo: {
    fontSize: 12,
    color: '#707070',
    marginTop: 5
  }
})