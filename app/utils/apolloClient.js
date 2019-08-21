/* eslint-disable import/no-extraneous-dependencies */
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

import { defaultState } from 'app/data';
import { apiUrl } from '../../config.json';

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: apiUrl });

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      // eslint-disable-next-line no-shadow
      updateCountry: (_, { code, name, continent, currency, emoji }, { cache }) => {
        cache.writeData({
          data: {
            country: {
              __typename: 'country',
              code,
              name,
              continent,
              currency,
              emoji,
            },
          },
        });
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, httpLink]),
});

export default client;
