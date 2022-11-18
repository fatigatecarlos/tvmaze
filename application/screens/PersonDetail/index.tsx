import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ImageBackground,
} from 'react-native';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  RootStackParamListDetail,
  RootRouteProps,
  Person,
} from '../../Interfaces';
import {getPeopleInfo} from '../../services/Series';
import styles from './styles';
import SerieCard from '../../components/SerieCard';

const PersonDetailScreen = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [person, setPerson] = useStateWithCallbackLazy<Person>({});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListDetail>>();

  const route = useRoute<RootRouteProps<'Detail'>>();
  const personId = route.params.id;

  const setSerieInfo = async () => {
    try {
      let response = await getPeopleInfo(personId);
      setPerson(response, () => {
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setLoading(true);
      setSerieInfo();
    });
  });

  const renderItem: ListRenderItem<any> = ({item}) => (
    <SerieCard
      id={parseInt(item.id, 10)}
      image={item.image ? item.image.medium : ''}
      title={item.name}
      screen={'Details'}
    />
  );

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.title}>{person.detail.name}</Text>

        <View style={styles.cardSpaceBetween}>
          <View>
            <Text style={styles.subtitle}>Birthday</Text>
            <Text style={styles.text}>{person.detail.birthday}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Deathday</Text>
            <Text style={styles.text}>{person.detail.deathday}</Text>
          </View>
        </View>

        <View style={styles.cardSpaceBetween}>
          <View>
            <Text style={styles.subtitle}>Gender</Text>
            <Text style={styles.text}>{person.detail.gender}</Text>
          </View>
          {person.detail.country ? (
            <View>
              <Text style={styles.subtitle}>Birthday place</Text>
              <Text style={styles.text}>{person.detail.country.name}</Text>
            </View>
          ) : null}
        </View>

        <Text style={styles.title}>Show</Text>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <ImageBackground
            source={
              person.detail.image
                ? {uri: person.detail.image.medium}
                : require('../../assets/Images/profile.jpg')
            }>
            <Image
              style={styles.tintImage}
              source={
                person.detail.image
                  ? {uri: person.detail.image.medium}
                  : require('../../assets/Images/profile.jpg')
              }
            />
          </ImageBackground>
          <View style={styles.container}>
            <FlatList
              data={person.show}
              renderItem={renderItem}
              numColumns={3}
              ListHeaderComponent={renderHeader}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default PersonDetailScreen;
