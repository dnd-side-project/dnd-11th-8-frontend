interface GreenRoundPlusIconProps {
  checked: boolean;
}

const GreenRoundPlusIcon = ({ checked }: GreenRoundPlusIconProps) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 3466528">
        <circle
          id="Ellipse 41"
          cx="12.198"
          cy="12.5"
          r="12"
          fill={checked ? '#F9FAFB' : '#34C184'}
        />
        {checked && (
          <circle cx="12.7605" cy="12.5" r="11.5" stroke="#022047" strokeOpacity="0.05" />
        )}
        <g id="Group 3466527">
          {checked ? (
            <path
              id="Union"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5406 10.1976C17.8335 9.90465 17.8335 9.42978 17.5406 9.13689C17.2477 8.84401 16.7728 8.84402 16.4799 9.13692L11.3438 14.2733L9.04194 11.9702C8.74913 11.6772 8.27425 11.6771 7.98128 11.9699C7.68831 12.2627 7.68819 12.7376 7.98101 13.0306L10.8116 15.8626C10.9427 15.9938 11.1102 16.0662 11.2816 16.08C11.4941 16.098 11.7128 16.0256 11.8754 15.863L17.5406 10.1976Z"
              fill="#4E5968"
            />
          ) : (
            <>
              <path
                id="Vector 6"
                d="M7.198 12.5H17.198"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                id="Vector 7"
                d="M12.198 17.5V7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          )}
        </g>
      </g>
    </svg>
  );
};

export default GreenRoundPlusIcon;
