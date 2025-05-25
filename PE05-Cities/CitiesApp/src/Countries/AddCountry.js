import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddCountry({ route }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const { addCountry } = route.params;

  const handleAddCountry = () => {
    if (name && currency) {
      addCountry({ name, currency });
      setName('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries</Text>
      <TextInput
        placeholder="Country Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
      />
      <Button title="Add Country" onPress={handleAddCountry} color="#444" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
});

