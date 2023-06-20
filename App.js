import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import Welcome from './components/Welcome';
import Player from './components/Player';

const App = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [running, setGameStarted] = useState(false);
  const player_left = screenWidth / 2;
  const [player_bottom, setPlayer_Bottom] = useState(screenHeight / 2);
  const gravity = 2;
  let gameTimer;

  // Falling
  useEffect(() => {
    if (player_bottom > 25 && running) {
      gameTimer = setInterval(() => {
        setPlayer_Bottom(player_bottom => player_bottom - gravity);
      }, 5);

      return () => {
        clearInterval(gameTimer);
      };
    }
  }, [player_bottom, running]);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
        {running 
        ? <Player player_left={player_left} player_bottom={player_bottom} /> 
        : <Welcome setGameStarted={setGameStarted} />}
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
