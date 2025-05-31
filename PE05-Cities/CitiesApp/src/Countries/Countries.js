// src/Countries/Countries.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function Countries({ navigation, countries }) {
  const handlePress = (country) => {
    navigation.navigate('Country', { country });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.currency}>{item.currency}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No countries added yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e6f2ff' },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontSize: 20, fontWeight: '600' },
  currency: { fontSize: 16, color: '#444' },
  empty: { fontStyle: 'italic', textAlign: 'center', marginTop: 20 },
});
