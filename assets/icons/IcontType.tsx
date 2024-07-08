import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface IcontType {
  color?: string;
  SecondaryColor?: string;
  width?: number;
  height?: number;
}

const getSvgContent = (color: string, SecondaryColor: string) => `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 22.1269C3.34315 22.1269 2 20.7838 2 19.1269V11.463C2 10.6126 2.36096 9.80207 2.99311 9.23314L9.9931 2.93314C11.134 1.90632 12.866 1.90632 14.0069 2.93314L21.0069 9.23314C21.639 9.80207 22 10.6126 22 11.463V19.1269C22 20.7838 20.6569 22.1269 19 22.1269H5ZM20 11.463V19.1269C20 19.6792 19.5523 20.1269 19 20.1269H16V15.1269C16 13.4701 14.6569 12.1269 13 12.1269H11C9.34315 12.1269 8 13.4701 8 15.1269V20.1269H5C4.44772 20.1269 4 19.6792 4 19.1269V11.463C4 11.1795 4.12032 10.9094 4.33104 10.7197L11.331 4.41973C11.7113 4.07746 12.2887 4.07746 12.669 4.41973L19.669 10.7197C19.8797 10.9094 20 11.1795 20 11.463ZM10 20.1269V15.1269C10 14.5747 10.4477 14.1269 11 14.1269H13C13.5523 14.1269 14 14.5747 14 15.1269V20.1269H10Z" fill="${color}"/>
</svg>
`;

const IcontType: React.FC<IcontType> = ({ color = 'black', SecondaryColor = 'black', width = 25, height = 25 }) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={getSvgContent(color, SecondaryColor)} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IcontType;