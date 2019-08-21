import gql from 'graphql-tag';

const updateCountry = gql`
  mutation updateCountry(
    $code: String!
    $name: String!
    $continent: String!
    $currency: String!
    $emoji: String!
  ) {
    updateCountry(
      code: $code
      name: $name
      continent: $continent
      currency: $currency
      emoji: $emoji
    ) @client
  }
`;

export default updateCountry;
