// src/Countries/Country.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Country({ route }) {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.label}>Currency:</Text>
      <Text style={styles.currency}>{country.currency}</Text>
      <Text style={styles.label}>Currency used:</Text>
      <Text style={styles.value}>{country.currency ? 'Yes' : 'No'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff0e6', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#d2691e', marginBottom: 10 },
  label: { fontSize: 18, color: '#555' },
  currency: { fontSize: 22, color: '#444', marginBottom: 20 },
  value: { fontSize: 20, color: '#007b00' },
});
