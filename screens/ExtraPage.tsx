import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ScreenContent from '../components/ScreenContent';
import PointsEdit from 'assets/icons/PointsEdit';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setLoading(false);
    }
  };

  const getSpeciesBackgroundColor = (species: string) => {
    switch (species) {
      case 'Human':
        return '#A3D8F4';
      case 'Alien':
        return '#A3F4A3';
      case 'Robot':
        return '#F4E3A3';
      default:
        return '#F4A3A3';
    }
  };

  const renderItem = ({ item }: { item: Character }) => (
    <View style={styles.categoryContainer}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryInfo}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{item.status}</Text>
          <Text style={[styles.speciesText, { backgroundColor: getSpeciesBackgroundColor(item.species) }]}>
            {item.species}
          </Text>
        </View>
        <Text style={styles.categoryName}>{item.name}</Text>
        <View style={styles.pointsEditIcon}>
          <PointsEdit />
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScreenContent path="Characters" title="Characters">
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </ScreenContent>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  categoryImage: {
    width: 105,
    height: 105,
    marginRight: 16,
    borderRadius: 8,
  },
  categoryInfo: {
    flex: 1,
    position: 'relative',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 8,
  },
  speciesText: {
    fontSize: 14,
    color: '#fff',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pointsEditIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharacterList;
