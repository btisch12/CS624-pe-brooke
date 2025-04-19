import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const CoreComponentsApp = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('./assets/icon.jpg')} style={styles.logo} />

        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          style={styles.input}
        />

        <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
        {[
          'CS 504 Software Engineering',
          'CS 506 Programming for Computing',
          'CS 519 Cloud Computing Overview',
          'CS 533 Computer Architecture',
          'CS 547 Secure Systems and Programs',
          'CS 622 Discrete Math and Algorithms for Computing',
          'DS 510 Artificial Intelligence for Data Science',
          'DS 620 Machine Learning & Deep Learning',
        ].map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}

        <Text style={styles.sectionTitle}>Depth of Study (6 credits)</Text>
        <Text style={styles.courseItem}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.courseItem}>CS 628 Full-Stack Development - Web App</Text>

        <Text style={styles.sectionTitle}>Capstone</Text>
        <Text style={styles.courseItem}>CS 698 Computer Science Capstone</Text>

        {/* Extra content to force scrolling */}
        <Text style={styles.sectionTitle}>Scroll Test</Text>
        {Array.from({ length: 30 }, (_, i) => (
          <Text key={`test-${i}`} style={styles.courseItem}>
            Extra Course Placeholder #{i + 1}
          </Text>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 20,
  },
  courseItem: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default CoreComponentsApp;


