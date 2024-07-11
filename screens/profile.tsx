import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Input, Button, VStack, FormControl, Select, CheckIcon, Center } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-native';
import { ScreenContent } from '../components/ScreenContent';

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <ScreenContent path="Profile" title="Profile">
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Center>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://example.com/avatar.png' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
          <VStack space={4} style={styles.formContainer}>
            <FormControl isRequired>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Gender</FormControl.Label>
              <Select
                selectedValue={gender}
                minWidth={200}
                placeholder="Select gender"
                onValueChange={(itemValue) => setGender(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size="5" />
                }}
              >
                <Select.Item label="Male" value="male" />
                <Select.Item label="Female" value="female" />
                <Select.Item label="Other" value="other" />
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Date of Birth</FormControl.Label>
              <Input
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="YYYY-MM-DD"
                keyboardType="numeric"
              />
            </FormControl>
            <Button onPress={() => console.log('Profile updated!')}>
              Update Profile
            </Button>
          </VStack>
        </Center>
      </ScrollView>
    </SafeAreaView>
    </ScreenContent>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
});

export default Profile;
