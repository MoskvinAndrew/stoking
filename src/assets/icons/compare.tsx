import React from 'react';

const CompareIcon = ({
  color = 'currentColor',
  width = '20px',
  height = '20px',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M9.99999 2.25001C10.4142 2.25001 10.75 2.58579 10.75 3.00001V17H9.24999V3.00001C9.24999 2.58579 9.58578 2.25001 9.99999 2.25001Z"></path>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M17 6.24999C17.4142 6.24999 17.75 6.58577 17.75 6.99999V17H16.25V6.99999C16.25 6.58577 16.5858 6.24999 17 6.24999Z"></path>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M2.99177 10.25C3.40598 10.2495 3.74218 10.5849 3.74268 10.9991L3.75001 16.9991L2.25001 17.0009L2.24268 11.0009C2.24218 10.5867 2.57755 10.2505 2.99177 10.25Z"></path>
    </svg>
  );
};

export default CompareIcon;
