import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Number for a half of a month, from 1 to 24. Ex.: 3 = 1st half february, 20 = 2nd half of october */
  HalfMonth: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum ProductType {
  Fruit = 'FRUIT',
  Vegetable = 'VEGETABLE'
}

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  type: ProductType;
  halfMonths: Array<Scalars['HalfMonth']>;
  inEndOfSeason: Scalars['Boolean'];
  newInSeason: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  getProductsInSeason: Array<Product>;
  getProductSeasons: Array<Scalars['HalfMonth']>;
  isInSeason: Scalars['Boolean'];
};


export type QueryGetProductsInSeasonArgs = {
  type?: Maybe<ProductType>;
};


export type QueryGetProductSeasonsArgs = {
  productId: Scalars['ID'];
};


export type QueryIsInSeasonArgs = {
  productId: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetProductsInSeasonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsInSeasonQuery = (
  { __typename?: 'Query' }
  & { getProductsInSeason: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'name' | 'name_en' | 'type' | 'photo' | 'newInSeason' | 'inEndOfSeason'>
  )> }
);


export const GetProductsInSeasonDocument = gql`
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

/**
 * __useGetProductsInSeasonQuery__
 *
 * To run a query within a React component, call `useGetProductsInSeasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsInSeasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsInSeasonQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsInSeasonQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsInSeasonQuery, GetProductsInSeasonQueryVariables>) {
        return Apollo.useQuery<GetProductsInSeasonQuery, GetProductsInSeasonQueryVariables>(GetProductsInSeasonDocument, baseOptions);
      }
export function useGetProductsInSeasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsInSeasonQuery, GetProductsInSeasonQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsInSeasonQuery, GetProductsInSeasonQueryVariables>(GetProductsInSeasonDocument, baseOptions);
        }
export type GetProductsInSeasonQueryHookResult = ReturnType<typeof useGetProductsInSeasonQuery>;
export type GetProductsInSeasonLazyQueryHookResult = ReturnType<typeof useGetProductsInSeasonLazyQuery>;
export type GetProductsInSeasonQueryResult = Apollo.QueryResult<GetProductsInSeasonQuery, GetProductsInSeasonQueryVariables>;