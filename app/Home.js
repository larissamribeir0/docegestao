import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export default function HomeCliente({ navigation }) {
  const [nome, setNome] =  useState('');
  const [desc, setDesc] =  useState('');
  const [preco, setPreco] =  useState('');
  const [image, setImage] =  useState('');

   const username = 'user1';

    //Recuperar dados do banco de dados
    const refer = ref(db, 'produtos/' + username);

    useEffect(() => {
        onValue(refer, (snapshot) => {
        const data = snapshot.val();
        setNome(data.nomeProd);
        setDesc(data.descProd);
        setImage(data.imageProd);
        setPreco(data.precoProd);
        });
    })

  return (
    <View style={styles.backgroundView}>
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 125,
          }}>
          <View style={styles.local}>
            <View style={styles.localIcon}>
              <MaterialCommunityIcons
                name={'map-marker-radius'}
                color={'#c13b34'}
                size={20}
              />
            </View>
            <View>
              <Text style={styles.localText}>Localização</Text>
              <Text style={styles.localTextCliente}>
                Localização do cliente
              </Text>
            </View>
            <View style={styles.icon}>
              <Feather name={'chevron-down'} size={20} />
            </View>
          </View>
          <MaterialCommunityIcons name="account-circle-outline" size={35} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('./assets/bolo.png')}
            style={{
              width: 350,
              height: 200,
              borderRadius: 20,
              marginTop: 25,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={styles.opcoes}>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'cake-variant'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Doces</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'cupcake'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Sobremesas</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'view-grid'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Encomendas</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'sale'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Descontos</Text>
          </View>
        </View>
        <ScrollView>
          <View style={[styles.favoritos, { marginTop: 30 }]}>
            <Text style={styles.titleFav}>Favoritos</Text>
            <Feather name={'chevron-down'} size={20} />
          </View>
          <View style={styles.produtos}>
            <View style={styles.produto}>
              {image !== '' && <Image style={styles.imgProdutos} source={{uri: image}}/>}
              <Text style={styles.categoria}>Categoria</Text>
              {nome !== '' && <Text style={styles.nome}>{nome}</Text>}
              {preco !== '' && <Text style={styles.preco}>{preco}</Text>}
            </View>
            <View style={styles.produto}>
              <Image
                source={require('./assets/milk_Shake.png')}
                style={styles.imgProdutos}
              />
              <Text style={styles.categoria}>Categoria</Text>
              <Text style={styles.nome}>Nome do produto</Text>
              <Text style={styles.preco}>R$ 00,00</Text>
            </View>
          </View>
          <View style={[styles.favoritos, { marginTop: 10 }]}>
            <Text style={styles.titleProx}>Próximo de você</Text>
            <Feather name={'chevron-down'} size={20} />
          </View>
          <View style={styles.produtos}>
            <View>
              <Image
                source={require('./assets/boloLaran.png')}
                style={styles.imgProdutos}
              />
              <Text style={styles.categoria}>Categoria</Text>
              <Text style={styles.nome}>Nome do produto</Text>
              <Text style={styles.preco}>R$ 00,00</Text>
            </View>
            <View>
              <Image
                source={require('./assets/brigadeiro.png')}
                style={styles.imgProdutos}
              />
              <Text style={styles.categoria}>Categoria</Text>
              <Text style={styles.nome}>Nome do produto</Text>
              <Text style={styles.preco}>R$ 00,00</Text>
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
    alignItems: 'center',
    maxHeight: height,
    minHeight: height,
    width: width,
  },
  //Localização
  local: {
    flexDirection: 'row',
    marginRight: 70,
  },
  localIcon: {
    backgroundColor: '#fdd3dd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 100,
    marginRight: 7,
  },
  localText: {
    fontSize: 12,
    color: '#707070',
  },

  localTextCliente: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 25,
    marginTop: 13,
  },

  //Opções
  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  opcaoIcon: {
    backgroundColor: '#fdd3dd',
    padding: 15,
    margin: 10,
    borderRadius: 12,
  },
  opcao: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcaoText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  //Favoritos
  favoritos: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  titleFav: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#83c0b6',
    marginRight: 5,
    marginLeft: 15,
  },
  imgProdutos: {
    width: 170,
    height: 110,
    borderRadius: 15,
    margin: 10,
  },
  produtos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  categoria: {
    fontSize: 11,
    color: '#707070',
    marginLeft: 15,
  },
  nome: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  preco: {
    fontWeight: 'bold',
    marginLeft: 100,
    marginTop: 5,
  },
  //Próximo de você
  titleProx: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 15,
  },
});
