import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {
  RootStackParamListDetail,
  RootRouteProps,
  SerieDetail,
} from '../../Interfaces';
import {getSerieinfo} from '../../services/Series';
import SeasonList from '../../components/SeasonList';
import SeasonDetail from '../../components/SeasonDetail';
import styles from './styles';
import {
  isFavorite,
  setFavorite,
  deleteFavorite,
} from '../../services/Repository';
import {favorite} from '../../assets/Colors';

const DetailScreen = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFavoriteSerie, setFavoriteSerie] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [serie, setSerie] = useStateWithCallbackLazy<SerieDetail>({});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListDetail>>();

  const route = useRoute<RootRouteProps<'Detail'>>();
  const serieId = route.params.id;

  const setSerieInfo = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      let favorite = await isFavorite(serieId);
      setFavoriteSerie(Boolean(favorite));

      let response = await getSerieinfo(serieId);
      setSerie(response, () => {
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeTab = (tab: number) => {
    setActiveTab(tab);
  };

  const addRemoveToFavorite = async () => {
    if (!isFavoriteSerie) {
      try {
        await setFavorite(serie);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await deleteFavorite(serieId);
      } catch (error) {
        console.log(error);
      }
    }
    setFavoriteSerie(!isFavoriteSerie);
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setLoading(true);
      setSerieInfo();
    });
  });

  const TabButton = (title: string, tabId: number) => {
    return (
      <TouchableOpacity onPress={() => changeTab(tabId)}>
        <Text
          style={[styles.tabTitle, activeTab === tabId ? styles.active : null]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const FavoriteButton = () => {
    let icon = isFavoriteSerie ? 'heart' : 'heart-o';
    return (
      <TouchableOpacity onPress={() => addRemoveToFavorite()}>
        <Icon name={icon} size={20} color={favorite} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.body}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <ImageBackground source={{uri: serie.image}}>
            <Image style={styles.tintImage} source={{uri: serie.image}} />
          </ImageBackground>

          <View style={styles.tabContainer}>
            {TabButton('Episodes', 1)}
            {TabButton('Details', 2)}
            {FavoriteButton()}
          </View>
          <View
            style={[styles.container, activeTab === 1 ? styles.hide : null]}>
            <SeasonDetail serie={serie} />
          </View>
          <View
            style={[styles.container, activeTab === 2 ? styles.hide : null]}>
            <SeasonList seasons={serie.seasons} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailScreen;
