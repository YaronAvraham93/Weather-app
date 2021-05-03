import React from 'react';
import { TypographySize } from '../../config/typography';
import styled from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case TypographySize.small:
      return `font-size: 16px `;
    case TypographySize.medium:
      return `font-size: 26px `;
    case TypographySize.large:
      return `font-size: 36px `;
    default:
      return `font-size: 16px `;
  }
};

const Heading = styled.h1(({color,size}) => `
  ${getSize(size)};
  color: ${color} ;
`);
export default function Typography({color,size,label}) {
  return (
    <Heading color={color} size={size} >
      {label}
    </Heading>
  );
}
