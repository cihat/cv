import React from "react";

export const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="#888888" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74" />
        <path
          d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"
          clipRule="evenodd" />
      </g>
    </svg >
  );
};
