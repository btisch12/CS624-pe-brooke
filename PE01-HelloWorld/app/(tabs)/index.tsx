import { View, Text, StyleSheet } from 'react-native';

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Brooke Tischer</Text>
      <Text style={styles.text}>Program: Master’s in Computer Science</Text>
      <Text style={styles.text}>School: City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
