import React from 'react';
import { Text, View } from 'react-native'

import styles from "./styles";
import { SerieDetail } from "../../Interfaces";

const SeasonDetail = (props: {serie: SerieDetail}) => {

    const regex = /(<([^>]+)>)/ig;
    const serie = props.serie

    return (
        <>
            <Text style={styles.title}>{serie.info.name}</Text>
            <Text style={styles.summary}>{serie.info.summary.replace(regex, '')}</Text>

            <View style={styles.cardSpaceBetween}>
                <View>
                    <Text style={styles.subtitle} >Premiered</Text>
                    <Text style={styles.text}>{serie.info.premiered}</Text>
                </View>
                <View>
                    <Text style={styles.subtitle} >Last season</Text>
                    <Text style={styles.text}>{serie.info.ended}</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle} >Genre:</Text>
                <Text style={styles.text}>
                    {serie.info.genres.map((genre: string, index: number) => {
                        if (serie.info.genres.length - 1 == index) {
                            return genre
                        }
                        return `${genre}, `
                    })}
                </Text>
            </View>

            <View style={styles.cardSpaceBetween}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.subtitle}>Days:</Text>
                    <Text style={styles.text}>
                        {serie.info.schedule.days.map((day: string, index: number) => {
                            if (serie.info.schedule.days.length - 1 == index) {
                                return day
                            }
                            return `${day} - `
                        })}
                    </Text>
                </View>
                <View >
                    <Text style={styles.subtitle}>Time:</Text>
                    <Text style={styles.text}>{serie.info.schedule.time}</Text>
                </View>
            </View>
        </>
    )
}

export default SeasonDetail