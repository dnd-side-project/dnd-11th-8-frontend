import React from 'react';

const Guide: React.FC<React.SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      d="M22.631 3.8554C22.2539 3.56534 19.8464 3.65236 19.8464 3.65236C15.1185 3.71037 13.03 6.98804 12.682 7.62617C12.3339 6.98804 10.2455 3.71037 5.5175 3.65236C5.5175 3.65236 3.13902 3.56534 2.73294 3.8554C2.35586 4.14546 2.12381 4.49353 2.18183 5.18967C2.23984 5.88581 2.79095 13.2823 11.4637 13.0213V16.705V17.1691V19.1415C11.4637 19.8086 12.0148 20.3598 12.682 20.3598C13.3491 20.3598 13.9002 19.8086 13.9002 19.1415V17.1691V16.705V13.0213C22.544 13.2823 23.1241 5.88581 23.1531 5.18967C23.2401 4.46452 23.0371 4.11645 22.631 3.8554Z"
      fill={color}
    />
  </svg>
);

export default Guide;