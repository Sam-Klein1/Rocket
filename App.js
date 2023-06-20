import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, TouchableWithoutFeedback, Text } from 'react-native';
import Welcome from './components/Welcome';
import Player from './components/Player';

const App = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [gameStarted, setGameStarted] = useState(false);
  const [running, setRunning] = useState(false);
  const player_left = screenWidth / 2;
  const [player_bottom, setPlayer_Bottom] = useState(screenHeight / 2);
  const [boosting, setBoosting] = useState(false);
  const gravity = 1.5;
  const boostX = 4;
  let gameTimer;
  let boostTimer;

  // Falling
  useEffect(() => {
    if (player_bottom > 25 && running) {
      gameTimer = setInterval(() => {
        setPlayer_Bottom(player_bottom => player_bottom - gravity);
      }, 10);

      return () => {
        clearInterval(gameTimer);
      };
    }
  }, [player_bottom, running]);

  const startBoost = () => {
    if (!running) {
      setRunning(true);
    }
      setBoosting(true);
  };

  //boost effect
  useEffect(() => {

    if (boosting && running) {
      boostTimer = setInterval(() => {
        setPlayer_Bottom(player_bottom => player_bottom + boostX)
      }, 10)

      return () => {
        clearInterval(boostTimer)
      }
    }
  }, [boosting])

  const stopBoost = () => {
    setBoosting(false);
  };

  console.log(player_bottom)
  // if (boosting)
  //   console.log("Boosting ...")
  // else
  //   console.log("Not Boosting ...")


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={startBoost} onPressOut={stopBoost}>
        <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
          {gameStarted ? (
            <Player player_left={player_left} player_bottom={player_bottom} startBoostboost={startBoost} stopBoost={stopBoost} boosting={boosting}/>
          ) : (
            <Welcome setGameStarted={setGameStarted} />
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
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
