import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { VStack, Button, HStack, Divider, useColorMode } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CalendarIcon from 'assets/icons/CalendarIcon';
import PaymentMethodsIcon from 'assets/icons/PaymentMethodsIcon';
import AddressIcon from 'assets/icons/AddressIcon';
import Notifications from 'assets/icons/Notifications';
import OffersIcon from 'assets/icons/OffersIcon';
import ReferFriendIcon from 'assets/icons/ReferFriendIcon';
import SupportIcon from 'assets/icons/SupportIcon';
import QuestionIcon from 'assets/icons/QuestionIcon';
import LightIcon from 'assets/icons/LightIcon';
import DarkIcon from 'assets/icons/DarkIcon';
import ScreenContent from 'components/ScreenContent';
import { RootStackParamList } from 'navigation';

const Avatar = require('assets/Avatar.png');

const SideMenu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleNavigation = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <ScreenContent path="SideBar" title="SideBar">
      <View style={[styles.container, colorMode === 'dark' && styles.darkContainer]}>
        <VStack space={2} style={styles.menuContainer}>
          <TouchableOpacity style={styles.profileContainer} onPress={() => handleNavigation('Profile')}>
            <Image source={Avatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Ashfak Sayem</Text>
              <Text style={styles.email}>ashfaksayem@gmail.com</Text>
            </View>
          </TouchableOpacity>
          {menuItems.map((item, index) => (
            <Button
              key={index}
           //   onPress={() => handleNavigation(item.route)}
              leftIcon={<item.icon color='white' />}
              style={styles.menuItem}
              _pressed={{ backgroundColor: 'white', _text: { color: '#6759FF' } }}
              _hover={{ backgroundColor: 'white', _text: { color: '#6759FF' } }}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
        <Divider />
        <View style={styles.footer}>
          <HStack alignItems="center" style={styles.footerRow}>
            <QuestionIcon color='white' />
            <Text style={styles.footerText}>Colour Scheme</Text>
          </HStack>
          <View style={styles.customSwitchContainer}>
            <TouchableOpacity style={styles.switchButton} onPress={toggleColorMode}>
              <View style={[styles.switchOption, colorMode === 'light' && styles.switchActive]}>
                <LightIcon color={colorMode === 'light' ? '#1A1D1F' : 'white'} />
                <Text style={[styles.switchText, colorMode === 'light' && styles.switchTextActive]}>Light</Text>
              </View>
              <View style={[styles.switchOption, colorMode === 'dark' && styles.switchActive]}>
                <DarkIcon color={colorMode === 'dark' ? '#6759FF' : 'white'} />
                <Text style={[styles.switchText, colorMode === 'dark' && styles.switchTextActive]}>Dark</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenContent>
  );
};

const menuItems = [
  { label: 'Calendar', route: 'Calendar', icon: CalendarIcon },
  { label: 'Payment Methods', route: 'PaymentMethods', icon: PaymentMethodsIcon },
  { label: 'Address', route: 'Address', icon: AddressIcon },
  { label: 'Notifications', route: 'Notifications', icon: Notifications },
  { label: 'Offers', route: 'Offers', icon: OffersIcon },
  { label: 'Refer a Friend', route: 'ReferFriend', icon: ReferFriendIcon },
  { label: 'Support', route: 'Support', icon: SupportIcon },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6759FF',
    padding: 16,
    width: '80%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 12,
    color: 'white',
  },
  menuContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuItem: {
    justifyContent: 'flex-start',
    backgroundColor: '#6759FF',
    color: 'white',
    fontWeight: '600',
    width: '80%',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'flex-start',
    paddingVertical: 16,
    width: '80%', 
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 15,
    color: 'white',
    marginLeft: 8,
  },
  customSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  switchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderRadius: 16,
    backgroundColor: '#FFFFFF26',
    height: 38,
  },
  switchOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderRadius: 16,
    marginHorizontal: 4,
    width: 90, 
  },
  switchActive: {
    backgroundColor: 'white',
  },
  switchText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 4,
  },
  switchTextActive: {
    fontSize: 15,
    color: '#1A1D1F',
    fontWeight: '600',
  },
  switchTextDesactive: {
    color: 'white',
  }, 
});

export default SideMenu;
