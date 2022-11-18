import React, {useEffect, useState} from 'react';
import {
  View,
  ListRenderItem,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListDetail, SerieDetailDb} from '../../Interfaces';

import SerieCard from '../../components/SerieCard';
import {SerieCardInterface} from '../../Interfaces';
import styles from './styles';
import {getSeries} from '../../services/Repository';

const FavoriteScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useStateWithCallbackLazy([]);
  const [orderList, setOrderList] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListDetail>>();

  const orderSerie = (a: SerieDetailDb, b: SerieDetailDb) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const orderListByName = () => {
    data.sort(orderSerie);
    setOrderList(false);
  };

  const setSeries = async () => {
    try {
      let response = await getSeries();

      setData(response, () => {
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setSeries();
      setOrderList(true);
    });
  }, []);

  const renderItem: ListRenderItem<SerieCardInterface> = ({item}) => (
    <SerieCard
      id={parseInt(item.idSerie)}
      image={item.image}
      title={item.name}
      screen={'Details'}
    />
  );
  const renderHeader = () => {
    return (
      <>
        <Image
          style={styles.image}
          source={require('../../assets/Images/tvmaze.png')}
        />
        <TouchableOpacity style={styles.orderButton} onPress={orderListByName}>
          <Text style={styles.textOrder}>Order by Name</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={() => {
            return (
              <View style={styles.container}>
                <Text style={styles.text}>
                  You don't have any favorite series yet.
                </Text>
              </View>
            );
          }}
          extraData={orderList}
        />
      )}
    </View>
  );
};

export default FavoriteScreen;
