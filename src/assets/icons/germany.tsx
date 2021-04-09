import React from 'react';

const Germany = ({
  color = 'currentColor',
  width = '19px',
  height = '12px',
  ...props
}) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width}
    //   height={height}
    //   viewBox="0 0 18.738 12"
    //   {...props}
    // >
    //   <path
    //     data-name="Path 17147"
    //     d="M1252.468,501.849l5.7-5.922,1.5,1.567-3.395,3.143.091.214h14.849v2.108H1256.2l3.654,3.43-1.558,1.538Z"
    //     transform="translate(-1252.468 -495.927)"
    //     fill={color}
    //   />
    // </svg>
  <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <rect width={width} height={height} fill="url(#pattern0)"/>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use  transform="scale(0.000833333 0.00138889)"/>
      </pattern>
      <image id="image0" width="1200" height="720" />
    </defs>
  </svg>

);
};

export default Germany;
