import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33331 7.99999C5.33331 7.26361 5.93027 6.66666 6.66665 6.66666H26.6666C27.403 6.66666 28 7.26361 28 7.99999C28 8.73637 27.403 9.33332 26.6666 9.33332H6.66665C5.93027 9.33332 5.33331 8.73637 5.33331 7.99999Z" ${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33337 16.3333C5.33337 15.597 5.93033 15 6.66671 15H26.6667C27.4031 15 28 15.597 28 16.3333C28 17.0697 27.4031 17.6667 26.6667 17.6667H6.66671C5.93033 17.6667 5.33337 17.0697 5.33337 16.3333Z" ${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33337 24.3333C5.33337 23.597 5.93033 23 6.66671 23H26.6667C27.4031 23 28 23.597 28 24.3333C28 25.0697 27.4031 25.6667 26.6667 25.6667H6.66671C5.93033 25.6667 5.33337 25.0697 5.33337 24.3333Z" ${color}"/>
</svg>
`;

const NavBar: React.FC<IcontType> = ({ color = '#25283C', width = 25, height = 25 }) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={getSvgContent(color)} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavBar;





