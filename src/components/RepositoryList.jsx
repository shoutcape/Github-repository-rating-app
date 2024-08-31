import { FlatList, View, StyleSheet, Text, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'lightgray',
    marginTop: 10
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
    alignSelf: 'flex-start'
  },
  mainInfo: {
    padding: 10,
    gap: 5,
    flex: 1
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const checkValues = (value) => {
  if (value >= 1000) {
    return `${(value/1000).toFixed(1)}k`
  }
  return `${value}`
}

const Repository = ({ item }) => (
  <View >
    <View style={styles.container}>
      <View>
        <Image style={styles.AvatarImage} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.mainInfo}>
        <Text style={styles.fullname}>{item.fullName}</Text>
        <Text style={{flexWrap: 'wrap'}}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.stats}>
      <View style={{alignItems: 'center'}}>
        <Text>{checkValues(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>{checkValues(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>{checkValues(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>{checkValues(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
);

const RepositoryList = () => {
  return (
    <View>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Repository item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RepositoryList;
