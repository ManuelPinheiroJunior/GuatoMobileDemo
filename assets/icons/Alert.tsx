import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6666 7.5C13.6666 11.1819 10.6819 14.1667 6.99998 14.1667C3.31808 14.1667 0.333313 11.1819 0.333313 7.5C0.333313 3.8181 3.31808 0.833334 6.99998 0.833334C10.6819 0.833334 13.6666 3.8181 13.6666 7.5ZM6.99998 6.83333C7.36817 6.83333 7.66665 7.13181 7.66665 7.5V10.8339C7.66665 11.2021 7.36817 11.5006 6.99998 11.5006C6.63179 11.5006 6.33331 11.2021 6.33331 10.8339V7.5C6.33331 7.13181 6.63179 6.83333 6.99998 6.83333ZM6.99998 5.5C7.36817 5.5 7.66665 5.20152 7.66665 4.83333C7.66665 4.46514 7.36817 4.16667 6.99998 4.16667C6.63179 4.16667 6.33331 4.46514 6.33331 4.83333C6.33331 5.20152 6.63179 5.5 6.99998 5.5Z" fill="${color}"/>
</svg>
`;

const Alert: React.FC<IcontType> = ({ color = '#6F767E', width = 18, height = 18 }) => {
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

export default Alert;

