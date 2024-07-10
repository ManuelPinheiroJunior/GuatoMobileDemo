import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75728 2.56223C7.17235 1.36815 8.86106 1.36815 9.27612 2.56223L9.90647 4.37567C10.0896 4.90243 10.5812 5.25959 11.1387 5.27095L13.0582 5.31007C14.3221 5.33583 14.8439 6.94188 13.8366 7.70562L12.3067 8.86551C11.8623 9.20243 11.6745 9.78032 11.836 10.3141L12.3919 12.1517C12.758 13.3617 11.3918 14.3543 10.3542 13.6323L8.77828 12.5357C8.32052 12.2171 7.71288 12.2171 7.25513 12.5357L5.67925 13.6323C4.6416 14.3543 3.2754 13.3617 3.64147 12.1517L4.19742 10.3141C4.35891 9.78032 4.17114 9.20243 3.72674 8.86551L2.19685 7.70563C1.18947 6.94189 1.71131 5.33583 2.97521 5.31007L4.89468 5.27095C5.45224 5.25959 5.94383 4.90243 6.12693 4.37567L6.75728 2.56223Z" fill="${color}"/>
</svg>
`;

const GridListIcon: React.FC<IcontType> = ({ color = '#FFC554', width = 18, height = 18 }) => {
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

export default GridListIcon;


