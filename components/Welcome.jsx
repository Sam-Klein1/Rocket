import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({setGameStarted}) => {
  
    const handlePlayButton = () => {
        setGameStarted(true);
    }
  
    return (
    <View style={styles.MainContainer}>
      <Button title="Play" onPress={handlePlayButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
