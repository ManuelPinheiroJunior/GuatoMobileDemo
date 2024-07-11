import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { ScreenContent } from 'components/ScreenContent';
import Container from 'components/Container';
import HeaderArticle from 'components/HeaderArticle';
import { NavigationProp } from '@react-navigation/native';
import FilterButton from 'components/FilterButton';
import GridListIcon from 'assets/icons/GridListIcon';
import GridIcon from 'assets/icons/GridIcon';
import StarIcon from 'assets/icons/StarIcon';
import PointsEdit from 'assets/icons/PointsEdit';
import { NativeBaseProvider } from 'native-base';

const categories = [
  { id: 1, name: 'AC Check-Up', avaliation: 4.8, type: '(87)', image: require('assets/Repair_1.png'), description: 'Starts From', value: '$128' },
  { id: 2, name: 'AC Regular Service', avaliation: 4.5, type: '(87)', image: require('assets/Repair_2.png'), description: 'Starts From', value: '$128' },
  { id: 3, name: 'AC Installation', avaliation: 4.5, type: '(87)', image: require('assets/Repair_3.png'), description: 'Starts From', value: '$170' },
  { id: 4, name: 'AC Uninstallation', avaliation: 4.5, type: '(87)', image: require('assets/Repair_4.png'), description: 'Starts From', value: '$170' },
];

type CategoryProps = {
  id: number;
  name: string;
  navigation: NavigationProp<any>;
};

const Service: React.FC<CategoryProps> = ({ id, name, navigation }) => {
  const onPress = () => {
    navigation.navigate('CategorieList');
  }

  return (
    <NativeBaseProvider>
      <ScreenContent path="Category" title="Category">
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Container style={styles.container}>
            <HeaderArticle text='Appliance Repair' dividerColor='#CABDFF'
              ButtonComponent={<FilterButton Icon={<GridListIcon />} onPress={onPress} />}
              ButtonComponenteComplementary={<FilterButton Icon={<GridIcon />} onPress={onPress} />}
            />
            {categories.map((category) => (
              <View key={category.id} style={styles.categoryContainer}>
                <Image source={category.image} style={styles.categoryImage} />
                <View style={styles.categoryInfo}>
                  <View style={styles.avaliationContainer}>
                    <StarIcon />
                    <Text style={styles.avaliationText}>{category.avaliation}</Text>
                    <Text style={styles.typeText}>{category.type}</Text>
                  </View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                  <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>{category.value}</Text>
                  </View>
                  <View style={styles.pointsEditIcon}>
                    <PointsEdit />
                  </View>
                </View>
              </View>
            ))}
          </Container>
        </ScrollView>
      </ScreenContent>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  container: {
    alignItems: 'center',
    padding: 16,
    width: '98%',
    height: 'auto',
    marginHorizontal: 'auto',
    gap: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  categoryImage: {
    width: 105,
    height: '100%',
    marginRight: 16,
    borderRadius: 8,
  },
  categoryInfo: {
    flex: 1,
    position: 'relative',
  },
  avaliationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avaliationText: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 8,
  },
  typeText: {
    fontSize: 14,
    color: '#666',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
  },
  valueContainer: {
    backgroundColor: '#B5E4CA',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  valueText: {
    fontSize: 14,
    color: '#1A1D1F',
    fontWeight: '700',
  },
  pointsEditIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Service;
