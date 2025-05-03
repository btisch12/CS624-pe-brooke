// todos/app/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ submitTodo, title = 'Submit' }) => (
  <TouchableOpacity style={styles.button} onPress={submitTodo}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 4,
    borderColor: '#ededed',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default Button;
