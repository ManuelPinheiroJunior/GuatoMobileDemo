import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2827 20.873C16.701 20.873 20.2827 17.2913 20.2827 12.873C20.2827 8.45477 16.701 4.87305 12.2827 4.87305C7.86444 4.87305 4.28271 8.45477 4.28271 12.873C4.28271 17.2913 7.86444 20.873 12.2827 20.873ZM12.2827 22.873C17.8056 22.873 22.2827 18.3959 22.2827 12.873C22.2827 7.3502 17.8056 2.87305 12.2827 2.87305C6.75987 2.87305 2.28271 7.3502 2.28271 12.873C2.28271 18.3959 6.75987 22.873 12.2827 22.873Z" fill="${color}"/>
<circle cx="12.2827" cy="18.873" r="1" fill="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2827 8.87305C11.4134 8.87305 10.6713 9.42815 10.3962 10.2063C10.2122 10.727 9.64087 10.9999 9.12015 10.8159C8.59944 10.6318 8.32651 10.0605 8.51056 9.5398C9.0592 7.98756 10.5395 6.87305 12.2827 6.87305C14.4918 6.87305 16.2827 8.66391 16.2827 10.873C16.2827 12.7369 15.0079 14.303 13.2827 14.747V15.873C13.2827 16.4253 12.835 16.873 12.2827 16.873C11.7304 16.873 11.2827 16.4253 11.2827 15.873V13.873C11.2827 13.3208 11.7304 12.873 12.2827 12.873C13.3873 12.873 14.2827 11.9776 14.2827 10.873C14.2827 9.76848 13.3873 8.87305 12.2827 8.87305Z" fill="${color}"/>
</svg>
`;

const QuestionIcon: React.FC<IcontType> = ({ color = '#D1D3D4', width = 24, height = 24 }) => {
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

export default QuestionIcon;

