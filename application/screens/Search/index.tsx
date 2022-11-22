import React, {useState} from 'react';
import {View, ActivityIndicator, TextInput} from 'react-native';
import {useStateWithCallbackLazy} from 'use-state-with-callback';

import styles from './styles';
import {getSearchSerie} from '../../services/Series';
import SerieList from '../../components/SerieList';

const SearchScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useStateWithCallbackLazy<any>([]);

  const setSeries = async () => {
    setLoading(true);
    try {
      let response = await getSearchSerie(search);

      if (Array.isArray(response)) {
        setData(response, () => {
          setLoading(false);
        });
      } else {
        setData([], () => {
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const execSearch = (text: string) => {
    setSearch(text);
    setSeries();
  };

  const SearchBar = () => {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={search}
          onChangeText={text => setSearch(text)}
          onEndEditing={setSeries()}
          autoFocus={true}
          clearButtonMode={'while-editing'}
          inlineImageLeft={'search_icon'}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <SerieList data={data} />
      )}
    </View>
  );
};

export default SearchScreen;
