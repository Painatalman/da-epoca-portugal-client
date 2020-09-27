import gql from "graphql-tag";

export const productsInSeason = gql`
  query getProductsInSeason {
    getProductsInSeason {
      name
      name_en
      type
      photo
      newInSeason
      inEndOfSeason
    }
  }
`;
