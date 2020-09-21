import React from 'react';

import { useGetProductsInSeasonQuery } from '../../generated/graphql'
import FruitsInSeasonSection from './FruitsInSeasonSection'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/slice';


  export default () => {
    const dispatch = useDispatch()
    const { data, error, loading } = useGetProductsInSeasonQuery();
    
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !data) {
      return <div>ERROR</div>;
    }

    dispatch(fetchProducts(data.getProductsInSeason))
  
    return <FruitsInSeasonSection />;
  };
  