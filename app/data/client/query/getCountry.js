import gql from 'graphql-tag';

const getCountry = gql`
  query {
    country(code: "CA") {
      name
      continent {
        name
      }
      currency
      emoji
    }
  }
`;

export default getCountry;
