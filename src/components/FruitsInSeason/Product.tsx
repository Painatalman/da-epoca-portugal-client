import * as React from "react";

import { PartialProduct } from "../../features/products/types";
import styled from "styled-components";
import Theme, { ThemeType } from "./Theme";

type ThemeProps = {
  theme: ThemeType;
};

type ProductProps = {
  product: PartialProduct;
};

const Card = styled.article`
  position: relative;

  font-size: ${(props: ThemeProps) => props.theme.fontSizes.medium};
  font-family: Fredoka One;
  text-align: center;

  strong {
    display: block;
    padding-top: ${(props: ThemeProps) => props.theme.spacing[1]};

    text-transform: capitalize;
    font-weight: normal;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.small};
  }
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.2rem;
  color: ${(props: ThemeProps) => props.theme.colors.white};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.xs};
  border-radius: 8px 8px 0 0;
`;

const EndingLabel = styled(Label)`
  background-color: ${(props: ThemeProps) => props.theme.colors.fruityOrange};
`;

const NewLabel = styled(Label)`
  background-color: ${(props: ThemeProps) => props.theme.colors.veggieGreen};
`;

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
`;

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Theme>
      <Card>
        <ImageContainer>
          <img alt="" src={product.photo || "http://placehold.it/80/80"} />
        </ImageContainer>
        {product.inEndOfSeason ? (
          <EndingLabel>Fim de Época</EndingLabel>
        ) : product.newInSeason ? (
          <NewLabel>Início de Época</NewLabel>
        ) : (
          ""
        )}
        <strong>{product.name}</strong>
      </Card>
    </Theme>
  );
};

export default Product;
