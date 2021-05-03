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
      return `font-size: 36px `;
  }
};

const Heading = styled.div(
({color,headerSize}) =>`

  ${getSize(headerSize)};
  color: ${color} ;
  @media (max-width: 768px) {
  flex-direction: column;
align-items:center;

}
`);
const Date = styled.div`
  color: white;
  font-size: 16px;
`;
const Clocation=styled.div`
display:block;
`;
export default function Location({country,city,date,size}) {


  return (
    <Clocation>
    <Heading color={'white'} headerSize={size} >
      {city},{country}
      <Date>{date}</Date>
    </Heading>

    </Clocation>
  );

}
