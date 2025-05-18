import React, { useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const profileCardColor = '#3b82f6';

function ProfileCard({ name, title, description, avatar }) {
  const [state, setState] = useState({
    showThumbnail: true,
  });

  const handleProfileCardPress = () => {
    const newState = update(state, {
      showThumbnail: { $set: !state.showThumbnail },
    });
    setState(newState);
  };

  return (
    <TouchableHighlight
      onPress={handleProfileCardPress}
      underlayColor="#2563eb"
      style={styles.touchWrapper}
    >
      <View
        style={[
          styles.cardContainer,
          state.showThumbnail ? styles.thumbnailSize : styles.expandedSize,
        ]}
      >
        <View style={styles.cardImageContainer}>
          {state.showThumbnail ? (
            <Image style={styles.avatar} source={avatar} />
          ) : (
            <Image style={styles.avatarLarge} source={avatar} />
          )}
        </View>
        {!state.showThumbnail && (
          <>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </>
        )}
      </View>
    </TouchableHighlight>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.number.isRequired,
};

export default function App() {
  const cards = new Array(6).fill(null).map((_, i) => (
    <ProfileCard
      key={i}
      name="John Doe"
      title="React Native Developer"
      description="John is a really great JavaScript developer. He loves using JS to build React Native apps for iOS and Android."
      avatar={require('./assets/images/user.png')}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },

  touchWrapper: {
    margin: 10,
  },

  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  thumbnailSize: {
    width: 120,
    height: 160,
  },

  expandedSize: {
    width: 300,
    height: 400,
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 60,
    marginTop: 20,
    paddingTop: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
  },

  avatarLarge: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },

  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },

  description: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
