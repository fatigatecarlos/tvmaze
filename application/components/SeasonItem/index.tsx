import React, { useState } from 'react';
import { Text, TouchableOpacity, View }from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import EpisodeItem from "./EpisodeItem";
import { Episode } from "../../Interfaces";
import { inactiveColor, activeTitleColor } from "../../assets/Colors";

const SeasonItem = (props: {episodes: Array<Episode>, number: number}) => {
    const [showEpisodeList, setShowEpisodeList] = useState(false);

    let icon = showEpisodeList ? 'angle-up' : 'angle-down'
    return (
        <View >
            <View style={[styles.container, showEpisodeList ? styles.activeTab : styles.inactiveTab]} >
                <TouchableOpacity 
                    onPress={() => {setShowEpisodeList(!showEpisodeList)}}>
                    <View style={styles.seasonButton}>
                        <Text style={[styles.title, showEpisodeList ? styles.titleActive : styles.titleInactive ]}>Season {props.number}</Text>
                        <Icon name={icon} size={20} color={showEpisodeList ? activeTitleColor : inactiveColor} />
                    </View>
                </TouchableOpacity>
            </View>
            {showEpisodeList ? 
                <View style={[styles.container, styles.inactiveTab]}>
                    {props.episodes.map((episode: Episode) => {
                        return <EpisodeItem episode={episode}/>
                    })}
                </View> : ''
            }
        </View>
    )
}

export default SeasonItem