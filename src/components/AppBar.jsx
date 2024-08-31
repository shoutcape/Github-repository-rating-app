import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
});

const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={'/'}>
          <Text
            padding={20}
            color={'white'}
            fontWeight='bold'
            fontSize='subheading'
          >
            Repositories
          </Text>
        </Link>
        <Link to={'/SignIn'}>
          <Text
            padding={20}
            color={'white'}
            fontWeight='bold'
            fontSize='subheading'
          >
            Sign In
          </Text>
        </Link>

      </ScrollView>
    </View>
  );
};
export default AppBar;
