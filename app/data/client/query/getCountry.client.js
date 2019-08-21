import gql from 'graphql-tag';

const getCountry = gql`
  query {
    country(code: "CA") @client {
      name
      continent
      currency
      emoji
    }
  }
`;

export default getCountry;
