import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {useStateWithCallbackLazy} from 'use-state-with-callback';

import styles from './styles';
import SerieCard from '../../components/SerieCard';
import {getPeople} from '../../services/Series';
import {SerieCardInterface} from '../../Interfaces';

const PersonScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [updatingList, setUpdatingList] = useState(false);
  const [data, setData] = useStateWithCallbackLazy([]);
  const [page, setPage] = useState(0);

  const setSeries = async () => {
    try {
      let response = await getPeople(page);
      data.concat(response);
      setData(response, () => {
        setLoading(false);
        setUpdatingList(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
    setSeries();
  };

  useEffect(() => {
    setSeries();
  }, []);

  const renderItem: ListRenderItem<SerieCardInterface> = ({item}) => (
    <SerieCard
      id={parseInt(item.id)}
      image={item.image ? item.image.medium : ''}
      title={item.name}
      screen={'PersonDetail'}
    />
  );

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
          ListHeaderComponent={() => (
            <Image
              style={styles.image}
              source={require('../../assets/Images/tvmaze.png')}
            />
          )}
          onEndReached={() => {
            if (!updatingList) {
              setUpdatingList(true);
              nextPage();
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            updatingList ? <ActivityIndicator size="large" /> : null
          }
        />
      )}
    </View>
  );
};

export default PersonScreen;
