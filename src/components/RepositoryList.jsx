import { FlatList, View, StyleSheet, Text, Image } from 'react-native';
import theme from '../theme';
import { useEffect, useState } from 'react';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'lightgray',
    marginTop: 10,
  },
  fullname: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  AvatarImage: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 5,
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  mainInfo: {
    padding: 10,
    gap: 5,
    flex: 1,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const checkValues = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return `${value}`;
};

const Repository = ({ item }) => (
  <View>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.AvatarImage}
          source={{ uri: item.ownerAvatarUrl }}
        />
      </View>
      <View style={styles.mainInfo}>
        <Text style={styles.fullname}>{item.fullName}</Text>
        <Text style={{ flexWrap: 'wrap' }}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.stats}>
      <View style={{ alignItems: 'center' }}>
        <Text>{checkValues(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{checkValues(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{checkValues(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{checkValues(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
);

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  const [repositoryNodes, setRepositoryNodes] = useState([]);

  useEffect(() => {
    if (repositories && repositories.edges) {
      const foundRepositories = repositories.edges.map((edge) => edge.node);
      setRepositoryNodes(foundRepositories)
    }
  }, [repositories]);


  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Repository item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RepositoryList;
