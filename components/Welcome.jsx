import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const WelcomeScreen = ({ setGameStarted }) => {
  const handlePlayButton = () => {
    setGameStarted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rocket-Run?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={handlePlayButton} />
        <Button title="Leaderboard" onPress={handlePlayButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    width: '65%',
    height: '50%',
  },
  title: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default WelcomeScreen;
