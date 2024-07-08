import React from 'react';
import { ScreenContent } from 'components/ScreenContent';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import { StyleSheet, Text } from 'react-native';

export default function Home() {

  const onProgress = () => {
  };

  return (
    <ScreenContent path="screens/home.tsx" title="">
      <Container style={styles.container}>
        <Text style={styles.title}>HELLO ASHFAK</Text>
        <Text style={styles.body}>What you are looking for today</Text>
        <SearchBar placeholder="Search what you need..." iconPosition="right" onPress={onProgress} />
      </Container>
        <Container style={styles.container}>
        <Text style={styles.title}>HELLO ASHFAK</Text>
        <Text style={styles.body}>What you are looking for today</Text>
        <SearchBar placeholder="Search what you need..." iconPosition="right" onPress={onProgress} />
      </Container>
    </ScreenContent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 380,
    height: 220,
    gap: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  title: {
    width: 149,
    height: 26,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 2,
    color: '#666C89',
  },
  body: {
    width: 312,
    height: 80,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 35,
    lineHeight: 41,
    letterSpacing: -3,
    color: '#172B4D',
    bottom: 10,
  },
});
