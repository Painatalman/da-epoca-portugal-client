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
    grid-gap: ${(props:ThemeProps) => props.theme.spacing[3]};
    padding: 0;
  }

  li {
    text-align: center;
  }

  strong {
    display: block;
    padding-top: ${(props:ThemeProps) => props.theme.spacing[1]};

    text-transform: capitalize;
    font-weight: normal;
    font-size: ${(props:ThemeProps) => props.theme.fontSizes.small};
  }

  h1, h2 {
    font-weight: normal;
    font-size: ${(props:ThemeProps) => props.theme.fontSizes.medium};
  }
`

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
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
                <ImageContainer>
                  <img 
                    alt="" 
                    src={product.photo || "http://placehold.it/80/80"} 
                  />
                </ImageContainer>
                <strong>{product.name}</strong>
              </li>
        )}
    </ul>
  </Section></Theme>
};

export default LaunchList;
