import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './store'
import {DashboardScreen} from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MedicationsScreen () {
  return (
    <View style={styles.container}>
      <Text>Medications</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function BuddiesScreen () {
  return (
    <View style={styles.container}>
      <Text>Buddies</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function ProgressScreen () {
  return (
    <View style={styles.container}>
      <Text>Progress</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function AccountScreen () {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Medications" component={MedicationsScreen} />
          <Tab.Screen name="Buddies" component={BuddiesScreen} />
          <Tab.Screen name="Progress" component={ProgressScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


