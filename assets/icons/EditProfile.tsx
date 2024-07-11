import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47907 2.72112C9.16248 2.0377 10.2705 2.0377 10.9539 2.72112L11.7789 3.54608C12.4623 4.2295 12.4623 5.33753 11.7789 6.02095L5.7166 12.0832C5.63517 12.1647 5.53145 12.2202 5.41852 12.2428L2.32493 12.8615C1.91676 12.9431 1.55689 12.5833 1.63853 12.1751L2.25724 9.08149C2.27983 8.96857 2.33534 8.86485 2.41677 8.78342L8.47907 2.72112ZM10.129 3.54608L10.9539 4.37104C11.1817 4.59884 11.1817 4.96819 10.9539 5.19599L10.129 6.02095L8.47906 4.37104L9.30402 3.54608C9.53183 3.31827 9.90118 3.31827 10.129 3.54608ZM7.65411 5.196L3.36662 9.48349L2.95414 11.5459L5.01653 11.1334L9.30402 6.84591L7.65411 5.196Z" fill="${color}"/>
</svg>
`;

const EditProfile: React.FC<IcontType> = ({ color = '#6759FF', width = 18, height = 18 }) => {
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

export default EditProfile;


