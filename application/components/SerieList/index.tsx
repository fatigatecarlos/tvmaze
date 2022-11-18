import React from 'react';
import {Text, FlatList, ListRenderItem, View} from 'react-native';

import {SerieCardInterface} from '../../Interfaces';
import SerieCard from '../SerieCard';
import styles from './styles';

const SerieList = ({data}: Array<any> | any) => {
  const renderItem: ListRenderItem<SerieCardInterface> = ({item}) => (
    <SerieCard
      id={parseInt(item.id, 10)}
      image={item.image ? item.image.medium : ''}
      title={item.name}
      screen={'Details'}
    />
  );

  return (
    <FlatList
      contentContainerStyle={{flexGrow: 1}}
      data={data}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <Text style={styles.text}>
            We couldn't find anything related to your search.
          </Text>
        </View>
      )}
    />
  );
};

export default SerieList;
