import type { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    {...props}
  >
    <circle cx="6" cy="6" r="4" />
    <path d="M9 9l3.5 3.5" />
  </svg>
);

export const CogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    {...props}
  >
    <circle cx="7" cy="7" r="2.2" />
    <path d="M7 1v1.4M7 11.6V13M1 7h1.4M11.6 7H13M2.7 2.7l1 1M10.3 10.3l1 1M11.3 2.7l-1 1M3.7 10.3l-1 1" />
  </svg>
);

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    {...props}
  >
    <path d="M2.5 3.5l2.5 2.5 2.5-2.5" />
  </svg>
);

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" {...props}>
    <rect x="1" y="2" width="12" height="2.4" rx="0.6" />
    <rect x="5.8" y="4.4" width="2.4" height="7.6" rx="0.6" />
  </svg>
);
