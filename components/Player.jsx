import React from "react";
import { Image, TouchableWithoutFeedback } from 'react-native'

const Player = ({ player_left, player_bottom, startBoost, stopBoost, boosting}) => {

    const rotationDegree = boosting ? "-30deg" : "30deg"
    const width = 70
    const height = 50

    return (

        <TouchableWithoutFeedback onPressIn={startBoost} onPressOut={stopBoost}>
            <Image
                style={{
                    position: 'absolute',
                    width: width,
                    height: height,
                    left: player_left - (width / 2),
                    bottom: player_bottom - (height / 2),
                    transform: [{ rotate: rotationDegree}]
                }}
                source={require('../assets/Rocket.png')}
            />
        </TouchableWithoutFeedback>
    );
}

export default Player;