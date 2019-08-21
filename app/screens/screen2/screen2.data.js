/* eslint-disable react/no-unused-state */
import { graphql, compose } from 'react-apollo';
import getCountry from 'app/data/client/query/getCountry';

const Screen2Data = ({ toLogic, loading, error, data }) => {
  if (loading) return toLogic({ loading });
  if (error) return toLogic({ error });

  return toLogic({ data });
};

const sendDataTo = compose(
  graphql(getCountry, {
    props: ({ data }) => {
      const { loading, error } = data;

      if (loading) return { loading };
      if (error) return { error };

      return { data };
    },
  }),
);

export default sendDataTo(Screen2Data);
