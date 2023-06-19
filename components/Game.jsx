import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Game = () => {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      {/* Implement your game components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game;
