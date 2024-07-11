import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Input, Button, VStack, FormControl, Select, CheckIcon, Center } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-native';
import { ScreenContent } from '../components/ScreenContent';
import Container from 'components/Container';
import HeaderArticle from 'components/HeaderArticle';
import EllipticalButton from 'components/EllipticalButton';
import { RootStackParamList } from 'navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Avatar = require('assets/Avatar.png');

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onProgress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <ScreenContent path="Profile" title="Profile">
      <HeaderArticle 
        text='Profile' 
        dividerColor='#CABDFF' 
        ButtonComponent={
          <EllipticalButton 
            title='Edit Profile' 
            onPress={onProgress} 
            style={styles.ellipticalButton} 
            fontText={12}
            colorText='#6759FF' 
            showEditProfileIcon={true} 
          />
        } 
      />
      <Container style={{ ...styles.container, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', top: 15 }}>
        <Image source={Avatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Ashfak Sayem</Text>
          <Text style={styles.email}>@ashfaksayem</Text>
        </View>
      </Container>
      <Container style={{...styles.profileDetailsContainer, top: 12}}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Center>
              <VStack space={2} style={styles.formContainer}>
                <FormControl  width={325}>
                  <FormControl.Label color={'black'} >Phone Number</FormControl.Label>
                  <Input
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Enter phone number"
                    keyboardType="phone-pad"
                    style={styles.input}
                  />
                </FormControl>
                <FormControl width={325} >
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter email"
                    keyboardType="email-address"
                    style={styles.input}
                  />
                </FormControl>
                <FormControl >
                  <FormControl.Label>Gender</FormControl.Label>
                  <Select
                    selectedValue={gender}
                    minWidth="100%"
                    placeholder="Select gender"
                    onValueChange={(itemValue) => setGender(itemValue)}
                    _selectedItem={{
                      bg: "cyan.600",
                      endIcon: <CheckIcon size="5" />
                    }}
                    style={styles.input}
                  >
                    <Select.Item label="Male" value="male" />
                    <Select.Item label="Female" value="female" />
                    <Select.Item label="Other" value="other" />
                  </Select>
                </FormControl>
                <FormControl >
                  <FormControl.Label width={325} >Date of Birth</FormControl.Label>
                  <Input
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholder="YYYY-MM-DD"
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </FormControl>
              </VStack>
            </Center>
          </ScrollView>
        </SafeAreaView>
      </Container>
    </ScreenContent>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
    width: '100%', 
    height: 'auto', 
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  profileDetailsContainer: {
    padding: 16,
    width: '100%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 48,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A1D1F',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  formContainer: {
    width: '100%',
    maxWidth: '100%',
    alignItems: 'flex-start',
    color: 'black',
    fontWeight: '800',
  },
  input: {
    width: '100%',
  },
  ellipticalButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    height: 35,
    width: 108,
  },
});

export default Profile;
