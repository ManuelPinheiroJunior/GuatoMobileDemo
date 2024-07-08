import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C7 14.4477 7.44772 14 8 14H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H8C7.44772 16 7 15.5523 7 15Z" fill="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H16L16.0107 2.01071C16.7136 2.07025 17.3761 2.3761 17.8787 2.87868L20.1213 5.12132C20.6239 5.6239 20.9297 6.28645 20.9893 6.98929L21 7V19ZM18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44771 4 6 4H15V6C15 7.10457 15.8954 8 17 8H19V19C19 19.5523 18.5523 20 18 20Z" fill="${color}"/>
</svg>

`;

const ListCategories: React.FC<IcontType> = ({ color = '#6F767E', width = 25, height = 25 }) => {
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

export default ListCategories;