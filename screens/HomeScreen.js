import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { getBrands } from '../services/api';
import { COLORS } from '../constants/colors';
import BrandListItem from '../components/BrandListItem';
import RadialGradientBackground from '../components/RadialGradientBackground';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const data = await getBrands();
        setBrands(data);
        setError(null);
      } catch (e) {
        setError('Failed to fetch brands. Please try again later.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={COLORS.primary} style={styles.centered} />;
    }
    if (error) {
      return <Text style={[styles.centered, styles.errorText]}>{error}</Text>;
    }
    return (
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BrandListItem
            brand={item}
            onPress={() => navigation.navigate('BrandDetail', { brandId: item.id })}
          />
        )}
        ListHeaderComponent={<Text style={styles.header}>Top Brands Today</Text>}
        contentContainerStyle={styles.listContainer}
      />
    );
  };

  return (
    <View style={styles.container}>
      <RadialGradientBackground />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        {renderContent()}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginVertical: 40,
    paddingHorizontal: 16,
    lineHeight: 40,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.error,
    fontSize: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default HomeScreen;