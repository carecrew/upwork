/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider as Provider } from 'styled-components';

import { Theme } from 'app/theme';
import client from './apolloClient';

const ThemeProvider = ({ children }) => {
  return <Provider theme={Theme}>{children}</Provider>;
};

const withProviders = WrappedComponent => {
  return class extends React.Component {
    static options = Component.options;

    render() {
      return (
        <ApolloProvider client={client}>
          <ThemeProvider>
            <WrappedComponent {...this.props} />
          </ThemeProvider>
        </ApolloProvider>
      );
    }
  };
};

export default withProviders;
