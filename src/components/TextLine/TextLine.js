import React from 'react';
import styled from 'styled-components';


const getFontsize = (fontsize) => {
  switch (fontsize) {
    case 'small':
      return `font-size: 16px `;
    case 'medium':
      return `font-size: 30px `;
    case 'large':
      return `font-size: 45px `;
    default:
      return `font-size: 16px `;
  }
};

const Text = styled.div(
  ({ color, fontsize, text, paddingtop, height, width }) => `
color: ${color};
${fontsize}
text: ${text};
padding-top: ${paddingtop};
height: ${height};
width: ${width};
`
);

const TextLine = ({ color, fontsize, text, paddingtop, height, width, degree }) => {
  const Degrees = degree ? '°' : '';
  return (
    <Text color={color} fontsize={getFontsize( fontsize) } paddingtop={paddingtop} width={width} height={height}>
      {text}
      {Degrees}
    </Text>
  );
};

export default TextLine;
