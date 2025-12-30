import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AppBar from './Screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// --- Navigation par pile ---
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="Accueil"  component={HomeScreen}  options={{headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',    headerTitleStyle: { fontWeight: 'bold' },}}/>
      <Stack.Screen  name="Details"  component={DetailsScreen}  options={{ title: 'Mes Détails Personnalisés' }}/>
    </Stack.Navigator>
  );
}

// --- Navigation par onglets ---
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: '#007AFF' }}>
          <AppBar />
        </SafeAreaView>
      <Tab.Navigator screenOptions={{
        headerShown: false,          // cacher le header 
        tabBarActiveTintColor: 'blue', // couleur de l’onglet actif
        tabBarInactiveTintColor: 'gray', // couleur de l’onglet inactif
        tabBarStyle: { backgroundColor: '#f0f0f0' }, // style de la barre
        tabBarLabelStyle: { fontSize: 14 }, // style du texte
        }}
      >

        <Tab.Screen  name="Maison"  component={HomeStack}  options={{ tabBarIcon: ({ color, size }) => (  <Ionicons name="home" size={size} color={color} />),}} />
        <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({ color,    size }) => ( <Ionicons name="settings" size={size} color={color} />  ), }}  />
      </Tab.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
