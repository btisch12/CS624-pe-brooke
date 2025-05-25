import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Countries({ route }) {
  const { countries } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.countryItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.currency}>{item.currency}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No countries added.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  countryItem: { marginBottom: 12 },
  name: { fontSize: 18, fontWeight: 'bold' },
  currency: { fontSize: 16, color: '#555' },
});
