import React from 'react';

export const StokingLogo = ({
  color = 'currentColor',
  fontWeight = '700',
  fontSize = '14',
  height = '40px',
  marginLeft = '16px',
  fontFamily = 'Helvetica',
}) => {
  return (
      <svg height={height} xmlns="http://www.w3.org/2000/svg" viewBox="15 0 50.44 15.6">
          <text fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>
              <tspan fill={color} x="14.75" y="11.9">st</tspan>
              <tspan fill={color} x="27.63" y="11.9" className="cls-2">ok</tspan>
              <tspan fill={color} x="43.98" y="11.9">ing</tspan>
          </text>
      </svg>
  );
};
