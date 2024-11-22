import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('screen');

export default function AddProd({ navigation }) {
  const [image, setImage] = useState(null);
  const [nome, setNome] =  useState('');  
  const [desc, setDesc] =  useState('');
  const [preco, setPreco] =  useState('');
  const [quant, setQuant] = useState('');
  
//Escolher uma imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

//Salvar dados do produto no banco de dados
    function addProd() {
        set(ref(db, 'produtos/' + username), {
            nomeProd: nome,
            descProd: desc,
            imageProd: image,
            precoProd: preco
        });
        navigation.navigate('Home');
    }
  
  return (
    <View style={estilos.container}>
      <View style={estilos.positionIcon}>
        <Feather
          name={'chevron-left'}
          color={'#aaa'}
          size={45}
          onPress={Home}
        />
      </View>
      <Text style={estilos.title}>Cadastrar produto</Text>
      <TouchableOpacity onPress={pickImage} style={estilos.buttonImage}>
        {!image && <Feather name={'image'} color={'#aaa'} size={45} />}
        {image && <Image source={{ uri: image }} style={estilos.image} />}
      </TouchableOpacity>
      <Text style={estilos.text}>Nome*</Text>
      <TextInput style={estilos.input} onChangeText={setNome}/>
      <Text style={estilos.text}>Valor*</Text>
      <TextInput style={estilos.input} onChangeText={setPreco}/>
      <Text style={estilos.text}>Quantidade*</Text>
      <TextInput style={estilos.input} onChangeText={setQuant}/>
      <Text style={estilos.text}>Descrição</Text>
      <TextInput style={estilos.input} onChangeText={setDesc}/>
      <TouchableOpacity style={estilos.button} onPress={addProd}>
        <Text style={estilos.textButton}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  positionIcon: {
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#cc64a0',
    marginBottom: 5,
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: '30%',
  },
  button: {
    padding: 70,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#93b7b3',
    borderRadius: 100,
    marginTop: 25,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    width: width - 100,
    height: '5%',
    paddingLeft: 10,
    backgroundColor: '#f3b1c7',
    marginBottom: 10,
    borderRadius: 15,
    fontSize: 15,
  },
  buttonImage: {
    width: 270,
    height: 150,
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 269,
    height: 149,
    borderRadius: 20,
  },
});
