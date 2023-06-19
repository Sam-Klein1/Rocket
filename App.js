import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Game from './components/Game';
import Welcome from './components/Welcome';

const App = () => {
  const [running, setGameStarted] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.backgroundImage}
      >
        {running ? (
          <Game />
        ) : (
          <Welcome setGameStarted={setGameStarted} />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
