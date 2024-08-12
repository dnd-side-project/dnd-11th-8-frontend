import React from 'react';

const Guide: React.FC<React.SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7238 20.826C11.2926 20.3566 10.7807 19.9844 10.2174 19.7304C9.65413 19.4765 9.05041 19.3458 8.44075 19.346H2.54052C2.29696 19.346 2.06338 19.2406 1.89116 19.0531C1.71894 18.8656 1.62219 18.6112 1.62219 18.346V4.174C1.62219 3.90878 1.71894 3.65443 1.89116 3.46689C2.06338 3.27935 2.29696 3.174 2.54052 3.174H8.44075C9.67222 3.174 10.8532 3.707 11.7238 4.655"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6222 20.826C13.0534 20.3566 13.5652 19.9844 14.1285 19.7304C14.6918 19.4765 15.2955 19.3458 15.9052 19.346H21.8054C22.049 19.346 22.2826 19.2406 22.4548 19.0531C22.627 18.8656 22.7238 18.6112 22.7238 18.346V4.174C22.7238 3.90878 22.627 3.65443 22.4548 3.46689C22.2826 3.27935 22.049 3.174 21.8054 3.174H15.9052C14.6737 3.174 13.4928 3.707 12.6222 4.655"
      fill={color}
    />
  </svg>
);

export default Guide;
