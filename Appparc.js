import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

import Inicio from './app/Inicioparc';
import Cadastro1 from '';
import Cadastro2 from '';
import Gerenciamento from './app/Gerenciamento';
import Perfil from './app/Perfilparc';
import Parceiros from './app/Parceiros';
import EditProd from './app/EditProd';
import HomeParceiro from './app/Homeparc';
import Login from './app/Loginparc';

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
        name="Home"
        component={HomeParceiro}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Gerenciamento"
        component={Gerenciamento}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={35} />
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
              size={35}
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
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parceiros"
          component={Parceiros}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro1"
          component={Cadastro1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro2"
          component={Cadastro2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProd"
          component={EditProd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
