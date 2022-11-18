import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListDetail} from '../../Interfaces';

const SerieCard = (props: {
  image: string;
  title: string;
  id: number;
  screen: string;
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListDetail>>();
  let imageSource = require('../../assets/Images/profile.jpg');
  if (props.image !== '') {
    imageSource = {uri: props.image};
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(props.screen, {
          id: props.id,
        })
      }
      style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SerieCard;
