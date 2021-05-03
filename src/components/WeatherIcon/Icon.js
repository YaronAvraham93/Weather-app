import React from 'react'
import styled from 'styled-components';


const IconWeather=styled.img
(({height,width}) => `

height:${height};
width:${width};
`)

export default function Icon({src,width,height}) {
    return (
        <IconWeather
        src={src}
        width={width}
        height={height}
       />
            
       
    )
}
