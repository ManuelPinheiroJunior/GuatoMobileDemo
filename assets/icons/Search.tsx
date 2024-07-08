import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.43889C2 3.71122 4.21122 1.5 6.93889 1.5C9.66656 1.5 11.8778 3.71122 11.8778 6.43889C11.8778 7.76806 11.3527 8.9746 10.4987 9.8624C10.4735 9.88185 10.4493 9.90312 10.4262 9.92621C10.4031 9.9493 10.3819 9.97353 10.3624 9.9987C9.4746 10.8527 8.26806 11.3778 6.93889 11.3778C4.21122 11.3778 2 9.16656 2 6.43889ZM10.9307 11.4914C9.83345 12.3595 8.44669 12.8778 6.93889 12.8778C3.38279 12.8778 0.5 9.99499 0.5 6.43889C0.5 2.88279 3.38279 0 6.93889 0C10.495 0 13.3778 2.88279 13.3778 6.43889C13.3778 7.94669 12.8595 9.33345 11.9914 10.4307L14.5802 13.0195C14.8731 13.3124 14.8731 13.7873 14.5802 14.0802C14.2873 14.3731 13.8124 14.3731 13.5195 14.0802L10.9307 11.4914Z" fill="${color}"/>
</svg>
`;

const Search: React.FC<IcontType> = ({ color = '#FFFFFF', width = 14, height = 14 }) => {
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

export default Search;
