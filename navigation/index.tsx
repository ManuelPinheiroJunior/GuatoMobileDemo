import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import TabNavigator from './tab-navigator';
import SideMenu from '../screens/SideMenu';
import HeaderMain from '../components/HeaderMain'; 

export type RootStackParamList = {
  TabNavigator: undefined;
  SideMenu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TabNavigator">
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={({ navigation, route }) => ({
                header: () => <HeaderMain path={route.name} navigation={navigation} route={route} />
              })}
            />
            <Stack.Screen
              name="SideMenu"
              component={SideMenu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
});
