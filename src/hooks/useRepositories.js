import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useEffect, useState } from 'react';

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (data && data.repositories) {
      setRepositories(data.repositories)
    }
  }, [data])

  return { repositories, loading, refetch };
};

export default useRepositories;
