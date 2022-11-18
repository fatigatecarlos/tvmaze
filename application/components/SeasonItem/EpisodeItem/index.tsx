import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './styles';
import {Episode, RootStackParamListEpisode} from '../../../Interfaces';

const EpisodeItem = (props: {episode: Episode}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListEpisode>>();
  const episode = props.episode;

  const imageSource = episode.image
    ? {uri: episode.image.medium}
    : require('../../../assets/Images/tvmazesmall.jpg');

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Episode', {
          id: episode.id,
        })
      }
      style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.nameCard}>
        <Text style={styles.title}>{episode.name}</Text>
        <Text style={styles.ratingTitle}>Rating</Text>
        <Text style={styles.rating}>{episode.rating.average}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeItem;
