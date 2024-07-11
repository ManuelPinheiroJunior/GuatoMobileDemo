import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ScreenContent from '../components/ScreenContent';

// Definindo tipos para os dados da API
type DogBreed = {
  id: number;
  name: string;
  temperament: string;
  image?: {
    url?: string;
  };
};

const DogList: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogBreeds();
  }, []);

  const fetchDogBreeds = async () => {
    try {
      const response = await axios.get<DogBreed[]>('https://api.thedogapi.com/v1/breeds');
      console.log(response);
      setDogBreeds(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dog breeds:", error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: DogBreed }) => (
    <View style={styles.itemContainer}>
      {item.image && item.image.url ? (
        <Image source={{ uri: item.image.url }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.temperament}</Text>
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
    <ScreenContent path="ExtraPage" title="ExtraPage">
      <FlatList
        data={dogBreeds}
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
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  placeholderText: {
    color: '#666',
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DogList;
