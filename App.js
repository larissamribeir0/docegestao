import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './app/Inicio';
import Apresentacao1 from './app/Apresentacao1';
import Apresentacao2 from './app/Apresentacao2';
import LoginCliente from './app/Login';
import HomeCliente from './app/Home';
import CadastroCliente from './app/Cadastro';
import LoginParceiro from './app/Loginparc';
import PedidosCliente from './app/PedidosCliente';
import Notificacao from './app/Notificacao';
import Perfil from './app/Perfil';
import InicioParceiro from './app/Inicioparc';
//import Cadastro1 from '';
//import Cadastro2 from '';
import Gerenciamento from './app/Gerenciamento';
import PerfilParceiro from './app/Perfilparc';
import Parceiros from './app/Parceiros';
import EditProd from './app/EditProd';
import HomeParceiro from './app/Homeparc';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f1a2bd',
        tabBarInactiveTintColor: '#83c0b6',
        tabBarStyle: {
          height: 100,
          borderRadius: 100,
          paddingTop: 15,
        },
      }}>
      <Tab.Screen
        name="HomeCliente"
        component={HomeCliente}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos Cliente"
        component={PedidosCliente}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notificacao}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={40}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Apresentacao1"
          component={Apresentacao1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Apresentacao2"
          component={Apresentacao2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginCliente"
          component={LoginCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroCliente"
          component={CadastroCliente}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InicioParceiro"
          component={InicioParceiro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginParceiro"
          component={LoginParceiro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
