import * as React from 'react';

import { selectProducts } from '../../features/products/slice';
import {useSelector } from 'react-redux'
import { PartialProduct } from '../../features/products/types';
import styled from 'styled-components'
import Theme, {ThemeType} from './Theme'

type ThemeProps = {
  theme: ThemeType
}

const Section = styled.section`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  min-width: 360px;
  max-width: 480px;
  padding: 0 ${(props:ThemeProps) => props.theme.spacing[2]};

  font-size: ${(props:ThemeProps) => props.theme.fontSizes.medium};
  font-family: Fredoka One;

  * {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props:ThemeProps) => props.theme.spacing[2]};
    padding: 0;
  }

  li {
    text-align: center;
  }

  li img {
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
  }

  strong {
    text-transform: capitalize;
    font-weight: normal;
    font-size: ${(props:ThemeProps) => props.theme.fontSizes.small};
  }

  h1, h2 {
    font-weight: normal;
    font-size: ${(props:ThemeProps) => props.theme.fontSizes.medium};
  }
`

const LaunchList: React.FC = () => {
  const products:PartialProduct[] = useSelector(selectProducts)
  
  return <Theme><Section> 
    <h1>Produtos da Época</h1>
    <ul>
      { products.map(
          (product, i) => 
              <li key={i}>
                <img 
                  alt="" 
                  src={product.photo || "http://placehold.it/80/80"} 
                />
                <strong>{product.name}</strong>
              </li>
        )}
    </ul>
  </Section></Theme>
};

export default LaunchList;
