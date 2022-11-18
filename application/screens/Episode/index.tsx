import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Image, Text, ScrollView, ImageBackground }from 'react-native'

import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { useRoute } from '@react-navigation/native';

import { getEpisode } from "../../services/Series";
import styles from "./styles";
import { RootRouteProps, EpisodeFull } from "../../Interfaces";

const EpisodeScreen = () => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [episode, setEpisode] = useStateWithCallbackLazy<EpisodeFull>({});
    const route = useRoute<RootRouteProps<'Episode'>>()

    const setEpisodeInfo = async () => {
        try {
            let response = await getEpisode(route.params.id)

            setEpisode(response, () => {
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
        
    };

    useEffect( () => {
        setEpisodeInfo()
    }, []);

    const regex = /(<([^>]+)>)/ig;
    const imageSource = episode.image ? {uri : episode.image.original } : require('../../assets/Images/tvmazebg.png')
    
    return (
        <ScrollView style={styles.body}>
             {isLoading ? 
            <ActivityIndicator size="large"/> :
            <View>
                <ImageBackground source={imageSource} >
                    <Image
                        style={styles.tintImage}
                        source={imageSource}
                    />
                </ImageBackground>
                <View style={styles.container}> 
                    <View style={styles.cardSpaceBetween}>
                        <View>
                            <Text style={styles.season}>Season {episode.season}</Text>
                            <Text style={styles.title}>{episode.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.subtitle}>Rating</Text>
                            <Text style={styles.text}>{episode.rating.average}</Text>
                        </View>
                    </View>

                    <Text style={styles.summary}>{episode.summary ? episode.summary.replace(regex, '') : null}</Text>
                </View>
            </View>
        }
        </ScrollView>
    )
}

export default EpisodeScreen