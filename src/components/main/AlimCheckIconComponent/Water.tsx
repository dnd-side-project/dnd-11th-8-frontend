import React from 'react';

const Water: React.FC<React.SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.2598 7.30664C22.4053 7.54135 22.3338 7.8554 22.0744 7.95015C21.015 8.33713 19.7941 7.94278 19.1763 6.94644C18.5585 5.9501 18.7481 4.68119 19.5658 3.90432C19.766 3.71409 20.0791 3.78967 20.2246 4.02438L22.2598 7.30664Z"
      fill="url(#paint0_linear_399_10483)"
    />
    <rect
      x="12.9546"
      y="9.05121"
      width="6.93167"
      height="2.97956"
      transform="rotate(-31.8007 12.9546 9.05121)"
      fill={color}
    />
    <circle cx="5.76761" cy="6.21954" r="4.26859" stroke="#34C184" stroke-width="2" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.82981 15.0135C3.79681 15.5874 4.25331 16.0709 4.82816 16.0709H10.149H10.149H15.4699C16.0448 16.0709 16.5013 15.5874 16.4683 15.0135L15.8882 4.92292C15.8577 4.3938 15.4198 3.98032 14.8898 3.98032H10.149H10.149H5.40829C4.8783 3.98032 4.44036 4.3938 4.40994 4.92292L3.82981 15.0135Z"
      fill="url(#paint1_linear_399_10483)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_399_10483"
        x1="19.1476"
        y1="6.3032"
        x2="20.1213"
        y2="4.74132"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8FD35E" />
        <stop offset="1" stop-color="#B9DAA1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_399_10483"
        x1="10.1491"
        y1="3.98032"
        x2="10.1491"
        y2="16.0709"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B9DAA1" />
        <stop offset="1" stop-color="#8DD35A" />
      </linearGradient>
    </defs>
  </svg>
);

export default Water;
