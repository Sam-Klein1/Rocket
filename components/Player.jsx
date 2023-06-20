import React from "react";
import { Image } from 'react-native'

const Player = ({player_left, player_bottom}) => {

    const width = 70
    const height = 50

    return (

        <Image 
            style={{
                position: 'absolute',
                width: width,
                height: height,
                left: player_left - (width/2),
                bottom: player_bottom - (height/2),
            }}
            source={require('../assets/Rocket.png')}
        />
    );
}

export default Player;