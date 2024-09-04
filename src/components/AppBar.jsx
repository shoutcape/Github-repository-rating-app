import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

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
        {data.me ? (
          <Link to={'/SignIn'} onPress={signOut}>
            <Text
              padding={20}
              color={'white'}
              fontWeight='bold'
              fontSize='subheading'
            >
              Sign Out
            </Text>
          </Link>
        ) : (
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
        )}
      </ScrollView>
    </View>
  );
};
export default AppBar;
